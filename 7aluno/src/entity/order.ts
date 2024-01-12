import OrderItem from "./order_item";

export default class Order {
    _id: string = "";
    _customerId: string; // se está em agregados diferentes, a relação é por ID
    _items:OrderItem[]; // se está dentro do mesmo agregado, a relação é pelo Objeto

    constructor(id: string, customerId: string, items:OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
    }
}