/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace FusePoolLens {
  export type FusePoolAssetStruct = {
    cToken: PromiseOrValue<string>;
    underlyingToken: PromiseOrValue<string>;
    underlyingName: PromiseOrValue<string>;
    underlyingSymbol: PromiseOrValue<string>;
    underlyingDecimals: PromiseOrValue<BigNumberish>;
    underlyingBalance: PromiseOrValue<BigNumberish>;
    supplyRatePerBlock: PromiseOrValue<BigNumberish>;
    borrowRatePerBlock: PromiseOrValue<BigNumberish>;
    totalSupply: PromiseOrValue<BigNumberish>;
    totalBorrow: PromiseOrValue<BigNumberish>;
    supplyBalance: PromiseOrValue<BigNumberish>;
    borrowBalance: PromiseOrValue<BigNumberish>;
    liquidity: PromiseOrValue<BigNumberish>;
    membership: PromiseOrValue<boolean>;
    exchangeRate: PromiseOrValue<BigNumberish>;
    underlyingPrice: PromiseOrValue<BigNumberish>;
    oracle: PromiseOrValue<string>;
    collateralFactor: PromiseOrValue<BigNumberish>;
    reserveFactor: PromiseOrValue<BigNumberish>;
    adminFee: PromiseOrValue<BigNumberish>;
    fuseFee: PromiseOrValue<BigNumberish>;
    borrowGuardianPaused: PromiseOrValue<boolean>;
    mintGuardianPaused: PromiseOrValue<boolean>;
  };

  export type FusePoolAssetStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
  ] & {
    cToken: string;
    underlyingToken: string;
    underlyingName: string;
    underlyingSymbol: string;
    underlyingDecimals: BigNumber;
    underlyingBalance: BigNumber;
    supplyRatePerBlock: BigNumber;
    borrowRatePerBlock: BigNumber;
    totalSupply: BigNumber;
    totalBorrow: BigNumber;
    supplyBalance: BigNumber;
    borrowBalance: BigNumber;
    liquidity: BigNumber;
    membership: boolean;
    exchangeRate: BigNumber;
    underlyingPrice: BigNumber;
    oracle: string;
    collateralFactor: BigNumber;
    reserveFactor: BigNumber;
    adminFee: BigNumber;
    fuseFee: BigNumber;
    borrowGuardianPaused: boolean;
    mintGuardianPaused: boolean;
  };

  export type FusePoolDataStruct = {
    totalSupply: PromiseOrValue<BigNumberish>;
    totalBorrow: PromiseOrValue<BigNumberish>;
    underlyingTokens: PromiseOrValue<string>[];
    underlyingSymbols: PromiseOrValue<string>[];
    whitelistedAdmin: PromiseOrValue<boolean>;
  };

  export type FusePoolDataStructOutput = [BigNumber, BigNumber, string[], string[], boolean] & {
    totalSupply: BigNumber;
    totalBorrow: BigNumber;
    underlyingTokens: string[];
    underlyingSymbols: string[];
    whitelistedAdmin: boolean;
  };
}

export declare namespace FusePoolDirectory {
  export type FusePoolStruct = {
    name: PromiseOrValue<string>;
    creator: PromiseOrValue<string>;
    comptroller: PromiseOrValue<string>;
    blockPosted: PromiseOrValue<BigNumberish>;
    timestampPosted: PromiseOrValue<BigNumberish>;
  };

  export type FusePoolStructOutput = [string, string, string, BigNumber, BigNumber] & {
    name: string;
    creator: string;
    comptroller: string;
    blockPosted: BigNumber;
    timestampPosted: BigNumber;
  };
}

export declare namespace UniswapOracle {
  export type ProofDataStruct = {
    block: PromiseOrValue<BytesLike>;
    accountProofNodesRlp: PromiseOrValue<BytesLike>;
    reserveAndTimestampProofNodesRlp: PromiseOrValue<BytesLike>;
    priceAccumulatorProofNodesRlp: PromiseOrValue<BytesLike>;
  };

  export type ProofDataStructOutput = [string, string, string, string] & {
    block: string;
    accountProofNodesRlp: string;
    reserveAndTimestampProofNodesRlp: string;
    priceAccumulatorProofNodesRlp: string;
  };
}

export interface MidasPoolLensInterface extends utils.Interface {
  functions: {
    'directory()': FunctionFragment;
    'getPoolAssetsByUser(address,address)': FunctionFragment;
    'getPoolAssetsWithData(address)': FunctionFragment;
    'getPoolSummary(address)': FunctionFragment;
    'getPoolsByAccountWithData(address)': FunctionFragment;
    'getPoolsOfUserWithData(address)': FunctionFragment;
    'getPublicPoolsByVerificationWithData(bool)': FunctionFragment;
    'getPublicPoolsWithData()': FunctionFragment;
    'getWhitelistedPoolsByAccount(address)': FunctionFragment;
    'getWhitelistedPoolsByAccountWithData(address)': FunctionFragment;
    'initialize(address,string,string,address[],string[],string[],string[],string[],string[])': FunctionFragment;
    'name()': FunctionFragment;
    'symbol()': FunctionFragment;
    'verifyPrice(address,(bytes,bytes,bytes,bytes))': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'directory'
      | 'getPoolAssetsByUser'
      | 'getPoolAssetsWithData'
      | 'getPoolSummary'
      | 'getPoolsByAccountWithData'
      | 'getPoolsOfUserWithData'
      | 'getPublicPoolsByVerificationWithData'
      | 'getPublicPoolsWithData'
      | 'getWhitelistedPoolsByAccount'
      | 'getWhitelistedPoolsByAccountWithData'
      | 'initialize'
      | 'name'
      | 'symbol'
      | 'verifyPrice',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'directory', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getPoolAssetsByUser',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'getPoolAssetsWithData', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getPoolSummary', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getPoolsByAccountWithData', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getPoolsOfUserWithData', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'getPublicPoolsByVerificationWithData',
    values: [PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'getPublicPoolsWithData', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getWhitelistedPoolsByAccount', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'getWhitelistedPoolsByAccountWithData',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
      PromiseOrValue<string>[],
    ],
  ): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'verifyPrice',
    values: [PromiseOrValue<string>, UniswapOracle.ProofDataStruct],
  ): string;

  decodeFunctionResult(functionFragment: 'directory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolAssetsByUser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolAssetsWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolSummary', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolsByAccountWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolsOfUserWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPublicPoolsByVerificationWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPublicPoolsWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getWhitelistedPoolsByAccount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getWhitelistedPoolsByAccountWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'verifyPrice', data: BytesLike): Result;

  events: {
    'Initialized(uint8)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface MidasPoolLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MidasPoolLensInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    directory(overrides?: CallOverrides): Promise<[string]>;

    getPoolAssetsByUser(
      comptroller: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolAssetsWithData(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolSummary(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolsOfUserWithData(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPublicPoolsByVerificationWithData(
      whitelistedAdmin: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPublicPoolsWithData(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getWhitelistedPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getWhitelistedPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    initialize(
      _directory: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _hardcodedAddresses: PromiseOrValue<string>[],
      _hardcodedNames: PromiseOrValue<string>[],
      _hardcodedSymbols: PromiseOrValue<string>[],
      _uniswapLPTokenNames: PromiseOrValue<string>[],
      _uniswapLPTokenSymbols: PromiseOrValue<string>[],
      _uniswapLPTokenDisplayNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    verifyPrice(
      cToken: PromiseOrValue<string>,
      proofData: UniswapOracle.ProofDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  directory(overrides?: CallOverrides): Promise<string>;

  getPoolAssetsByUser(
    comptroller: PromiseOrValue<string>,
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolAssetsWithData(
    comptroller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolSummary(
    comptroller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolsByAccountWithData(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolsOfUserWithData(
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPublicPoolsByVerificationWithData(
    whitelistedAdmin: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPublicPoolsWithData(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getWhitelistedPoolsByAccount(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

  getWhitelistedPoolsByAccountWithData(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  initialize(
    _directory: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _hardcodedAddresses: PromiseOrValue<string>[],
    _hardcodedNames: PromiseOrValue<string>[],
    _hardcodedSymbols: PromiseOrValue<string>[],
    _uniswapLPTokenNames: PromiseOrValue<string>[],
    _uniswapLPTokenSymbols: PromiseOrValue<string>[],
    _uniswapLPTokenDisplayNames: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  verifyPrice(
    cToken: PromiseOrValue<string>,
    proofData: UniswapOracle.ProofDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    directory(overrides?: CallOverrides): Promise<string>;

    getPoolAssetsByUser(
      comptroller: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<FusePoolLens.FusePoolAssetStructOutput[]>;

    getPoolAssetsWithData(
      comptroller: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<FusePoolLens.FusePoolAssetStructOutput[]>;

    getPoolSummary(
      comptroller: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, string[], string[], boolean]>;

    getPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], FusePoolDirectory.FusePoolStructOutput[], FusePoolLens.FusePoolDataStructOutput[], boolean[]]
    >;

    getPoolsOfUserWithData(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], FusePoolDirectory.FusePoolStructOutput[], FusePoolLens.FusePoolDataStructOutput[], boolean[]]
    >;

    getPublicPoolsByVerificationWithData(
      whitelistedAdmin: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], FusePoolDirectory.FusePoolStructOutput[], FusePoolLens.FusePoolDataStructOutput[], boolean[]]
    >;

    getPublicPoolsWithData(
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], FusePoolDirectory.FusePoolStructOutput[], FusePoolLens.FusePoolDataStructOutput[], boolean[]]
    >;

    getWhitelistedPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getWhitelistedPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], FusePoolDirectory.FusePoolStructOutput[], FusePoolLens.FusePoolDataStructOutput[], boolean[]]
    >;

    initialize(
      _directory: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _hardcodedAddresses: PromiseOrValue<string>[],
      _hardcodedNames: PromiseOrValue<string>[],
      _hardcodedSymbols: PromiseOrValue<string>[],
      _uniswapLPTokenNames: PromiseOrValue<string>[],
      _uniswapLPTokenSymbols: PromiseOrValue<string>[],
      _uniswapLPTokenDisplayNames: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    verifyPrice(
      cToken: PromiseOrValue<string>,
      proofData: UniswapOracle.ProofDataStruct,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {
    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    directory(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolAssetsByUser(
      comptroller: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolAssetsWithData(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolSummary(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolsOfUserWithData(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPublicPoolsByVerificationWithData(
      whitelistedAdmin: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPublicPoolsWithData(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getWhitelistedPoolsByAccount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getWhitelistedPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    initialize(
      _directory: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _hardcodedAddresses: PromiseOrValue<string>[],
      _hardcodedNames: PromiseOrValue<string>[],
      _hardcodedSymbols: PromiseOrValue<string>[],
      _uniswapLPTokenNames: PromiseOrValue<string>[],
      _uniswapLPTokenSymbols: PromiseOrValue<string>[],
      _uniswapLPTokenDisplayNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    verifyPrice(
      cToken: PromiseOrValue<string>,
      proofData: UniswapOracle.ProofDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    directory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolAssetsByUser(
      comptroller: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolAssetsWithData(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolSummary(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolsOfUserWithData(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPublicPoolsByVerificationWithData(
      whitelistedAdmin: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPublicPoolsWithData(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getWhitelistedPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getWhitelistedPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      _directory: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _hardcodedAddresses: PromiseOrValue<string>[],
      _hardcodedNames: PromiseOrValue<string>[],
      _hardcodedSymbols: PromiseOrValue<string>[],
      _uniswapLPTokenNames: PromiseOrValue<string>[],
      _uniswapLPTokenSymbols: PromiseOrValue<string>[],
      _uniswapLPTokenDisplayNames: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyPrice(
      cToken: PromiseOrValue<string>,
      proofData: UniswapOracle.ProofDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
