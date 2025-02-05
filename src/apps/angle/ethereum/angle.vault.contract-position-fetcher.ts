import { Inject } from '@nestjs/common';
import { BigNumberish } from 'ethers';
import { sum } from 'lodash';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { DefaultDataProps } from '~position/display.interface';
import { MetaType } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import {
  GetDisplayPropsParams,
  GetTokenBalancesParams,
  GetTokenDefinitionsParams,
} from '~position/template/contract-position.template.types';

import { AngleApiHelper } from '../common/angle.api';
import { AngleContractFactory, AngleVaultManager } from '../contracts';

export type AngleVaultDefinition = {
  address: string;
  collateral: string;
  stablecoin: string;
};

@PositionTemplate()
export class EthereumAngleVaultsContractPositionFetcher extends ContractPositionTemplatePositionFetcher<
  AngleVaultManager,
  DefaultDataProps,
  AngleVaultDefinition
> {
  groupLabel = 'Vaults';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(AngleContractFactory) protected readonly contractFactory: AngleContractFactory,
    @Inject(AngleApiHelper) protected readonly angleApiHelper: AngleApiHelper,
  ) {
    super(appToolkit);
  }

  getContract(address: string): AngleVaultManager {
    return this.contractFactory.angleVaultManager({ address, network: this.network });
  }

  async getDefinitions() {
    const vaultManagers = Object.values(await this.angleApiHelper.getVaultManagers(this.network));
    return vaultManagers;
  }

  async getTokenDefinitions({ contract }: GetTokenDefinitionsParams<AngleVaultManager, AngleVaultDefinition>) {
    return [
      { metaType: MetaType.SUPPLIED, address: await contract.collateral(), network: this.network },
      { metaType: MetaType.BORROWED, address: await contract.stablecoin(), network: this.network },
    ];
  }

  async getLabel({ contractPosition }: GetDisplayPropsParams<AngleVaultManager>): Promise<string> {
    return `${getLabelFromToken(contractPosition.tokens[0])} - ${getLabelFromToken(contractPosition.tokens[1])}`;
  }

  async getTokenBalancesPerPosition({
    address,
    contract,
  }: GetTokenBalancesParams<AngleVaultManager>): Promise<BigNumberish[]> {
    const userBalanceCount = await contract.balanceOf(address);

    if (Number(userBalanceCount) < 1) return [0, 0];

    const vaultIds = Object.values(await this.angleApiHelper.getVaultIds(address, this.network));

    const balances = await Promise.all(
      vaultIds.map(async vaultId => {
        const [collateralData, vaultDebt] = await Promise.all([
          contract.vaultData(vaultId),
          contract.getVaultDebt(vaultId),
        ]);

        return {
          supplied: collateralData.collateralAmount,
          borrowed: vaultDebt,
        };
      }),
    );

    const supplied = sum(balances.map(x => Number(x.supplied)));
    const borrowed = sum(balances.map(x => Number(x.borrowed)));

    return [supplied, borrowed];
  }
}
