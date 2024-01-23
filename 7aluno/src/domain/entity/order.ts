import OrderItem from "./order_item";

export default class Order {
  private _id: string = "";
  private _customerId: string; // se está em agregados diferentes, a relação é por ID
  private _items: OrderItem[]; // se está dentro do mesmo agregado, a relação é pelo Objeto
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  changeItems(items: OrderItem[]) {
    this._items = items;
    this.total();
    this.validate();
  }

  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }
    if (this._customerId.length === 0) {
      throw new Error("Customer ID is required");
    }
    if (this._items.length === 0) {
      throw new Error("Items are required");
    }
    if (this._items.some((item) => item.quantity <= 0)) {
      throw new Error("Quantity must be greater than 0");
    }
    return true;
  }

  total(): number {
    this._total = this._items.reduce(
      (acc, item) => acc + item.orderItemTotal(),
      0
    );
    return this._total;
  }
}
