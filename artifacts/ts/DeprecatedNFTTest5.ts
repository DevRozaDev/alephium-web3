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
import { default as DeprecatedNFTTest5ContractJson } from "../nft/DeprecatedNFTTest5.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace DeprecatedNFTTest5Types {
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
    returnMoreValues: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[HexString, bigint, bigint]>;
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
    returnMoreValues: {
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
  DeprecatedNFTTest5Instance,
  DeprecatedNFTTest5Types.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as DeprecatedNFTTest5Types.Fields;
  }

  at(address: string): DeprecatedNFTTest5Instance {
    return new DeprecatedNFTTest5Instance(address);
  }

  tests = {
    getTokenUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest5Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenUri", params);
    },
    returnMoreValues: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest5Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<[HexString, bigint, bigint]>> => {
      return testMethod(this, "returnMoreValues", params);
    },
  };
}

// Use this object to test and deploy the contract
export const DeprecatedNFTTest5 = new Factory(
  Contract.fromJson(
    DeprecatedNFTTest5ContractJson,
    "",
    "65c9d8a07f42939e84b4ae2fdc94dbbe3545c8ddb0832df08ef69b3cab50ebe3",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class DeprecatedNFTTest5Instance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<DeprecatedNFTTest5Types.State> {
    return fetchContractState(DeprecatedNFTTest5, this);
  }

  methods = {
    getTokenUri: async (
      params?: DeprecatedNFTTest5Types.CallMethodParams<"getTokenUri">
    ): Promise<DeprecatedNFTTest5Types.CallMethodResult<"getTokenUri">> => {
      return callMethod(
        DeprecatedNFTTest5,
        this,
        "getTokenUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    returnMoreValues: async (
      params?: DeprecatedNFTTest5Types.CallMethodParams<"returnMoreValues">
    ): Promise<
      DeprecatedNFTTest5Types.CallMethodResult<"returnMoreValues">
    > => {
      return callMethod(
        DeprecatedNFTTest5,
        this,
        "returnMoreValues",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  call = this.methods;

  transaction = {
    getTokenUri: async (
      params: DeprecatedNFTTest5Types.SignExecuteMethodParams<"getTokenUri">
    ): Promise<
      DeprecatedNFTTest5Types.SignExecuteMethodResult<"getTokenUri">
    > => {
      return signExecuteMethod(DeprecatedNFTTest5, this, "getTokenUri", params);
    },
    returnMoreValues: async (
      params: DeprecatedNFTTest5Types.SignExecuteMethodParams<"returnMoreValues">
    ): Promise<
      DeprecatedNFTTest5Types.SignExecuteMethodResult<"returnMoreValues">
    > => {
      return signExecuteMethod(
        DeprecatedNFTTest5,
        this,
        "returnMoreValues",
        params
      );
    },
  };

  async multicall<Calls extends DeprecatedNFTTest5Types.MultiCallParams>(
    calls: Calls
  ): Promise<DeprecatedNFTTest5Types.MultiCallResults<Calls>> {
    return (await multicallMethods(
      DeprecatedNFTTest5,
      this,
      calls,
      getContractByCodeHash
    )) as DeprecatedNFTTest5Types.MultiCallResults<Calls>;
  }
}
