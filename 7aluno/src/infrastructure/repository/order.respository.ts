import Order from "../../domain/entity/order";
import OrderItemModel from "../db/orm/sequelize/model/order-item.model";
import OrderModel from "../db/orm/sequelize/model/order.model";
import OrderRepositoryInterface from "../../domain/repository/order-repository.interface";
import { Model } from "sequelize";

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
    throw new Error("Unable to change an order");
  }

  async findAll(): Promise<Order[]> {
    throw new Error("Unable to change an order");
  }
}
