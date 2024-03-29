/*
 * Apesar de ser uma classe muito simples, ela é muito expressiva
 *
 */

import Address from "./address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to active a customer");
    }
    this._active = true;
  }

  desactivate() {
    this._active = false;
  }

  setAddress(address: Address) {
    this._address = address;
  }

  get Address(): Address {
    return this._address;
  }
}
