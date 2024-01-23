/*
    * Depois que é criar um objeto de valor, não é mais possível fazer mais a alteração
    * pois não há como mudar os atributos privados e não há getters e setters
    * Se em algum momento eu setar um endereço para um cliente, 
    * a única forma de eu mudar o usuário de endereço é criando um novo objeto de valor e atribuindo para ele
    * Outra coisa que pode ser feita é criar diversas formas de visualizar essas informações quando precisar 

*/
export default class Address {
    _street: string = "";
    _number: number = 0;
    _zip: string = "";
    _city: string = "";
  
    constructor(street: string, number: number, zip: string, city: string) {
      this._street = street;
      this._number = number;
      this._zip = zip;
      this._city = city;
  
      this.validate();
    }
  
    get street(): string {
      return this._street;
    }
  
    get number(): number {
      return this._number;
    }
  
    get zip(): string {
      return this._zip;
    }
  
    get city(): string {
      return this._city;
    }
    
    validate() {
      if (this._street.length === 0) {
        throw new Error("Street is required");
      }
      if (this._number === 0) {
        throw new Error("Number is required");
      }
      if (this._zip.length === 0) {
        throw new Error("Zip is required");
      }
      if (this._city.length === 0) {
        throw new Error("City is required");
      }
    }
  
    toString() {
      return `${this._street}, ${this._number}, ${this._zip} ${this._city}`;
    }
  }