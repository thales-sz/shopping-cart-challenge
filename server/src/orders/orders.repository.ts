import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from 'src/database/abstract.repository';
import { Order } from './schema/orders.schema';
import { FilterQuery, Model } from 'mongoose';

export class OrdersRepository extends AbstractRepository<Order> {
  constructor(@InjectModel(Order.name) ordersModel: Model<Order>) {
    super(ordersModel);
  }

  async findOne(filterQuery: FilterQuery<Order>): Promise<Order | null> {
    return (
      await this.model.findOne(filterQuery, {}, { lean: true })
    ).populated('products');
  }

  async findAll(filterQuery: FilterQuery<Order>) {
    return this.model
      .find(filterQuery, {}, { lean: true })
      .populate('products');
  }
}
