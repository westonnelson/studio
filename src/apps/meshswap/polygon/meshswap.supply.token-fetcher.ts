import { Inject } from '@nestjs/common';
import _ from 'lodash';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import {
  GetDataPropsParams,
  GetDisplayPropsParams,
  GetPricePerShareParams,
  GetUnderlyingTokensParams,
} from '~position/template/app-token.template.types';

import { MeshswapContractFactory, MeshswapSinglePool } from '../contracts';

@PositionTemplate()
export class PolygonMeshswapSupplyTokenFetcher extends AppTokenTemplatePositionFetcher<MeshswapSinglePool> {
  groupLabel = 'Supply';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(MeshswapContractFactory) private readonly contractFactory: MeshswapContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): MeshswapSinglePool {
    return this.contractFactory.meshswapSinglePool({ network: this.network, address });
  }

  async getAddresses(): Promise<string[]> {
    const multicall = this.appToolkit.getMulticall(this.network);
    const singlePoolFactoryContract = this.contractFactory.meshswapSinglePoolFactory({
      network: this.network,
      address: '0x504722a6eabb3d1573bada9abd585ae177d52e7a',
    });

    const poolCountRaw = await multicall.wrap(singlePoolFactoryContract).getPoolCount();
    const poolCount = Number(poolCountRaw);

    const poolAddresses = await Promise.all(
      _.range(0, poolCount).map(async index => {
        return await multicall.wrap(singlePoolFactoryContract).getPoolAddressByIndex(index);
      }),
    );
    return poolAddresses;
  }

  async getUnderlyingTokenDefinitions({ contract }: GetUnderlyingTokensParams<MeshswapSinglePool>) {
    return [{ address: await contract.token(), network: this.network }];
  }

  async getPricePerShare({ contract }: GetPricePerShareParams<MeshswapSinglePool>): Promise<number[]> {
    const exchangeRateRaw = await contract.exchangeRateStored();
    const exchangeRate = Number(exchangeRateRaw) / 10 ** 18;
    return [exchangeRate];
  }

  async getLabel({ contract }: GetDisplayPropsParams<MeshswapSinglePool>): Promise<string> {
    return contract.name();
  }

  async getLiquidity({ appToken, contract }: GetDataPropsParams<MeshswapSinglePool>) {
    const cashRaw = await contract.getCash();
    const borrowAmountRaw = await contract.totalBorrows();
    const cash = Number(cashRaw) / 10 ** appToken.decimals;
    const borrowAmount = Number(borrowAmountRaw) / 10 ** appToken.decimals;

    return borrowAmount + cash;
  }
}
