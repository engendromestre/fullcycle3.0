import Address from "../../entity/address";
import Customer from "../../entity/customer";
import CustomerChangeAddressEvent from "../customer/customer-change-address.event";
import CustomerCreatedEvent from "../customer/customer-created.event";
import EnviaConsoleLog1Handler from "../customer/handler/envia-console-log1.handler";
import EnviaConsoleLog2Handler from "../customer/handler/envia-console-log2.handler";
import EnviaEnderecoClienteAlteradoHandler from "../customer/handler/envia-endereco-cliente-alterado.handle";
import SendEmailWhenIsProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenIsProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(
      1
    );
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandler);
  });

  it("should unregister an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenIsProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    eventDispatcher.unregister("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(
      0
    );
  });

  it("should unregister all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventProductHandler = new SendEmailWhenIsProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventProductHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventProductHandler);

    eventDispatcher.unregisterAll();

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeUndefined();
  });

  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenIsProductIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle"); // fica espiando se o eventHandler executa o método handle

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    const eventCustomerHandler1 = new EnviaConsoleLog1Handler();
    const eventCustomerHandler2 = new EnviaConsoleLog2Handler();
    const eventCustomerChangeAddress =
      new EnviaEnderecoClienteAlteradoHandler();

    eventDispatcher.register("CustomerCreatedEvent", eventCustomerHandler1);
    eventDispatcher.register("CustomerCreatedEvent", eventCustomerHandler2);
    eventDispatcher.register(
      "CustomerChangeAddressEvent",
      eventCustomerChangeAddress
    );

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(eventCustomerHandler1);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toMatchObject(eventCustomerHandler2);

    expect(
      eventDispatcher.getEventHandlers["CustomerChangeAddressEvent"][0]
    ).toMatchObject(eventCustomerChangeAddress);

    const productCreatedEvent = new ProductCreatedEvent({
      name: "Product 1",
      description: "Product 1 description",
      price: 10.0,
    });

    const customer = new Customer("123", "Customer 1");

    const customerCreatedEvent = new CustomerCreatedEvent({
      id: customer.id,
      name: customer.name,
    });

    const address = new Address("Rua 1", 111, "18600-000", "São Paulo");
    customer.changeAddress(address);

    const customerChangeAddress = new CustomerChangeAddressEvent({
      id: customer.id,
      nome: customer.name,
      endereco: customer.Address.toString(),
    });

    // quando o notify for executado
    // o SendMailWhenProctIsCreateHandler.handle() deve ser executado!
    eventDispatcher.notify(productCreatedEvent);
    eventDispatcher.notify(customerCreatedEvent);
    eventDispatcher.notify(customerChangeAddress);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
