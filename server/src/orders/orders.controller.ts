import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll() {
    return this.ordersService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const order = await this.ordersService.findOne({ _id: id });

      if (!order) throw new NotFoundException(`Order with id: ${id} not found`);

      return order;
    } catch (error) {
      if (error.name === 'CastError') {
        throw new NotFoundException(`Could not search for the id: ${id}`);
      }
      throw error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.ordersService.findOne({ _id: id });

    return this.ordersService.remove(id);
  }
}
