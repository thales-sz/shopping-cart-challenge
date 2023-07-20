import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';
import { Product } from 'src/products/schema/products.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order extends AbstractDocument {
  @Prop({ type: Product, required: true })
  product: Product[];

  @Prop({ type: Number, required: true })
  totalPrice: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
