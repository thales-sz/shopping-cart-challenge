import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './orders.repository';
import { Order } from './schema/orders.schema';
import { FilterQuery } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.ordersRepository.create(createOrderDto);
  }

  async findAll(filterQuery: FilterQuery<Order>): Promise<Order[]> {
    return this.ordersRepository.findAll(filterQuery);
  }

  async findOne(filterQuery: FilterQuery<Order>): Promise<Order | null> {
    return this.ordersRepository.findOne(filterQuery);
  }

  async update(
    id: string,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Order | null> {
    return this.ordersRepository.findOneAndUpdate({ _id: id }, updateOrderDto);
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete({ _id: id });
  }
}
