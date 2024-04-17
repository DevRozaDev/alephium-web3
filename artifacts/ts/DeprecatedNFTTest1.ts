/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
} from "@alephium/web3";
import { default as DeprecatedNFTTest1ContractJson } from "../nft/DeprecatedNFTTest1.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace DeprecatedNFTTest1Types {
  export type Fields = {
    collectionId: HexString;
    uri: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };

  export interface SignExecuteMethodTable {
    getTokenUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  DeprecatedNFTTest1Instance,
  DeprecatedNFTTest1Types.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as DeprecatedNFTTest1Types.Fields;
  }

  at(address: string): DeprecatedNFTTest1Instance {
    return new DeprecatedNFTTest1Instance(address);
  }

  tests = {
    getTokenUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest1Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenUri", params);
    },
  };
}

// Use this object to test and deploy the contract
export const DeprecatedNFTTest1 = new Factory(
  Contract.fromJson(
    DeprecatedNFTTest1ContractJson,
    "",
    "3d89da71c0a6e905dd54267f897137ec6beb9603bb787e0e4a36bfc76f7a712b",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class DeprecatedNFTTest1Instance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<DeprecatedNFTTest1Types.State> {
    return fetchContractState(DeprecatedNFTTest1, this);
  }

  methods = {
    getTokenUri: async (
      params?: DeprecatedNFTTest1Types.CallMethodParams<"getTokenUri">
    ): Promise<DeprecatedNFTTest1Types.CallMethodResult<"getTokenUri">> => {
      return callMethod(
        DeprecatedNFTTest1,
        this,
        "getTokenUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  call = this.methods;

  transaction = {
    getTokenUri: async (
      params: DeprecatedNFTTest1Types.SignExecuteMethodParams<"getTokenUri">
    ): Promise<
      DeprecatedNFTTest1Types.SignExecuteMethodResult<"getTokenUri">
    > => {
      return signExecuteMethod(DeprecatedNFTTest1, this, "getTokenUri", params);
    },
  };

  async multicall<Calls extends DeprecatedNFTTest1Types.MultiCallParams>(
    calls: Calls
  ): Promise<DeprecatedNFTTest1Types.MultiCallResults<Calls>> {
    return (await multicallMethods(
      DeprecatedNFTTest1,
      this,
      calls,
      getContractByCodeHash
    )) as DeprecatedNFTTest1Types.MultiCallResults<Calls>;
  }
}
