import Order from "../../domain/entity/order";
import OrderItemModel from "../db/orm/sequelize/model/order-item.model";
import OrderModel from "../db/orm/sequelize/model/order.model";
import OrderRepositoryInterface from "../../domain/repository/order-repository.interface";
import OrderItem from "../../domain/entity/order_item";

export default class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async update(entity: Order): Promise<void> {
    OrderModel.destroy({
      where: {
        id: entity.id,
      },
    });
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async find(id: string): Promise<Order> {
    let orderModel;
    try {
      orderModel = await OrderModel.findOne({
        where: {
          id,
        },
        include: ["items"],
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("Order not found");
    }

    const arrItems = this.getOrderItems(orderModel.toJSON().items);
    const order = new Order(id, orderModel.customer_id, arrItems);
    return order;
  }

  async findAll(): Promise<Order[]> {
    const orderModels = await OrderModel.findAll({
      include: ["items"],
    });

    const orders = orderModels.map((orderModel) => {
      const arrItems = this.getOrderItems(orderModel.toJSON().items);
      let order = new Order(orderModel.id, orderModel.customer_id, arrItems);
      return order;
    });
    return orders;
  }

  getOrderItems(items: OrderItemModel[]): OrderItem[] {
    const arrItems: OrderItem[] = [];
    for (let i = 0; i < items.length; i++) {
      let itemModel = items[i];
      let orderItem = new OrderItem(
        itemModel.id,
        itemModel.name,
        itemModel.price,
        itemModel.product_id,
        itemModel.quantity
      );
      arrItems.push(orderItem);
    }
    return arrItems;
  }
}
