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
  SubscribeOptions,
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
} from "@alephium/web3";
import { default as AddContractJson } from "../add/Add.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace AddTypes {
  export type Fields = {
    sub: HexString;
    result: bigint;
  };

  export type State = ContractState<Fields>;

  export type AddEvent = ContractEvent<{ x: bigint; y: bigint }>;
  export type Add1Event = ContractEvent<{ a: bigint; b: bigint }>;

  export interface CallMethodTable {
    add: {
      params: CallContractParams<{ array: [bigint, bigint] }>;
      result: CallContractResult<[bigint, bigint]>;
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
}

class Factory extends ContractFactory<AddInstance, AddTypes.Fields> {
  at(address: string): AddInstance {
    return new AddInstance(address);
  }

  tests = {
    add: async (
      params: TestContractParams<AddTypes.Fields, { array: [bigint, bigint] }>
    ): Promise<TestContractResult<[bigint, bigint]>> => {
      return testMethod(this, "add", params);
    },
    addPrivate: async (
      params: TestContractParams<AddTypes.Fields, { array: [bigint, bigint] }>
    ): Promise<TestContractResult<[bigint, bigint]>> => {
      return testMethod(this, "addPrivate", params);
    },
    createSubContract: async (
      params: TestContractParams<
        AddTypes.Fields,
        { a: bigint; path: HexString; subContractId: HexString; payer: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "createSubContract", params);
    },
    destroy: async (
      params: TestContractParams<AddTypes.Fields, { caller: Address }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroy", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Add = new Factory(
  Contract.fromJson(
    AddContractJson,
    "",
    "2b9e382c20b4facf21eb745a46a72447dae221c274518e19c60b5ddfe478cc9c"
  )
);

// Use this class to interact with the blockchain
export class AddInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<AddTypes.State> {
    return fetchContractState(Add, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeAddEvent(
    options: SubscribeOptions<AddTypes.AddEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Add.contract,
      this,
      options,
      "Add",
      fromCount
    );
  }

  subscribeAdd1Event(
    options: SubscribeOptions<AddTypes.Add1Event>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Add.contract,
      this,
      options,
      "Add1",
      fromCount
    );
  }

  subscribeAllEvents(
    options: SubscribeOptions<AddTypes.AddEvent | AddTypes.Add1Event>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(Add.contract, this, options, fromCount);
  }

  methods = {
    add: async (
      params: AddTypes.CallMethodParams<"add">
    ): Promise<AddTypes.CallMethodResult<"add">> => {
      return callMethod(Add, this, "add", params, getContractByCodeHash);
    },
  };

  async multicall<Calls extends AddTypes.MultiCallParams>(
    calls: Calls
  ): Promise<AddTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Add,
      this,
      calls,
      getContractByCodeHash
    )) as AddTypes.MultiCallResults<Calls>;
  }
}
