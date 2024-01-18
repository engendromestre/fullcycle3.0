import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("shoud throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrow(new Error("ID is required"));
  });
  it("shoud throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("1", "", []);
    }).toThrow(new Error("Customer ID is required"));
  });
  it("shoud throw error when items is empty", () => {
    expect(() => {
      let order = new Order("1", "123", []);
    }).toThrow(new Error("Items are required"));
  });
  it("shoud calculate total", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);
    const item2 = new OrderItem("i12", "Item 2", 200, "p2", 2);
    const order = new Order("o1", "c1", [item]);

    let total = order.total();

    expect(total).toBe(200);

    const order2 = new Order("o1", "c1", [item, item2]);
    total = order2.total();
    expect(total).toBe(600);
  });
  it("should throw error if the item qte is less or equal zero", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 100, "p1", 0);
      const order = new Order("o1", "c1", [item]);
    }).toThrow(new Error("Quantity must be greater than 0"));
  });
});
