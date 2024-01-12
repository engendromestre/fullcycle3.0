/*
    * Depois que é criar um objeto de valor, não é mais possível fazer mais a alteração
    * pois não há como mudar os atributos privados e não há getters e setters
    * Se em algum momento eu setar um endereço para um cliente, 
    * a única forma de eu mudar o usuário de endereço é criando um novo objeto de valor e atribuindo para ele
    * Outra coisa que pode ser feita é criar diversas formas de visualizar essas informações quando precisar 

*/
export default class Address {
    // atributos privados - nao pode fazer alteração direta
    _street: string = "";
    _number: number = 0;
    _zip: string = "";
    _city: string = "";

    // ao criar o objeto é necessário passar todos os argumentos
    constructor(street: string, number: number, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
        this.validate(); // se auto-valida, vai ter consistência o tempo todo
    }

    // depende do nível de validação exigida
    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is required");
        }

        if(this._number === 0) {
            throw new Error("Number is required");
        }

        if (this._zip.length === 0) {
            throw new Error("Street is required");
        }

        if (this._city.length === 0) {
            throw new Error("Street is required");
        }
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._city} - ${this._zip}`;
    }
}