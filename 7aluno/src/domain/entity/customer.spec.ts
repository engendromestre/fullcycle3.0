import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("shoud throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrow(new Error("ID is required"));
  });

  it("shoud throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrow(new Error("Name is required"));
  });

  it("shoud change name", () => {
    /// Triple A

    // Arrange
    const customer = new Customer("123", "John");
    // Act
    customer.changeName("Jane");
    // Assert
    expect(customer.name).toBe("Jane");
  });

  it("shoud activate customer", () => {
    const customer = new Customer("1", "Customer 1");
    const address = new Address("Rua 1", 111, "18600-000", "São Paulo");
    customer.changeAddress(address);

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("shoud deactivate customer", () => {
    const customer = new Customer("1", "Customer 1");
    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when address is undefined when activated a customer", () => {
    expect(() => {
      const customer = new Customer("1", "Customer 1");
      customer.activate();
    }).toThrow(new Error("Address is mandatory to active a customer"));
  });
});
