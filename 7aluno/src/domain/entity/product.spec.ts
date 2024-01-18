import Product from './product';

describe("Prodcut unit tests", () => {
  it("shoud throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100);
    }).toThrow(new Error("ID is required"));
  });
  it("shoud throw error when name is empty", () => {
    expect(() => {
      const product = new Product("p1", "", 100);
    }).toThrow(new Error("Name is required"));
  });
  it("shoud throw error when price is less than zero", () => {
    expect(() => {
      const product = new Product("p1", "Product 1", -1);
    }).toThrow(new Error("Price must be greater than zero"));
  });
  it("shoud change name", () => {
    const product = new Product("p1", "Product 1", 100);
    product.changeName("Product 2");
    expect(product.name).toBe("Product 2");
  });
  it("shoud change price", () => {
    const product = new Product("p1", "Product 1", 100);
    product.changePrice(200);
    expect(product.price).toBe(200);
  });
});
