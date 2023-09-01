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
} from "@alephium/web3";
import { default as WarningsContractJson } from "../test/Warnings.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace WarningsTypes {
  export type Fields = {
    a: bigint;
    b: bigint;
  };

  export type State = ContractState<Fields>;
}

class Factory extends ContractFactory<WarningsInstance, WarningsTypes.Fields> {
  getDefaultInitialFields() {
    return this.contract.getDefaultInitialFields() as WarningsTypes.Fields;
  }

  consts = { C: BigInt(0) };

  at(address: string): WarningsInstance {
    return new WarningsInstance(address);
  }

  tests = {
    foo: async (
      params: TestContractParams<WarningsTypes.Fields, { x: bigint; y: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "foo", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Warnings = new Factory(
  Contract.fromJson(
    WarningsContractJson,
    "",
    "9a0c90d67d729a478062d6794cf7b75c27483c50f6fe2ad13c5ed8873ad1fde2"
  )
);

// Use this class to interact with the blockchain
export class WarningsInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<WarningsTypes.State> {
    return fetchContractState(Warnings, this);
  }
}
