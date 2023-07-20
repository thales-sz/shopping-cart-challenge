import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from 'src/database/abstract.repository';
import { Order } from './schema/orders.schema';
import { Model } from 'mongoose';

export class OrdersRepository extends AbstractRepository<Order> {
  constructor(@InjectModel(Order.name) ordersModel: Model<Order>) {
    super(ordersModel);
  }
}
