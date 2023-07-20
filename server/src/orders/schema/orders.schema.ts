import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';
import { Product } from 'src/products/schema/products.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order extends AbstractDocument {
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }], required: true })
  products: Product[];

  @Prop({ type: Number, required: true })
  totalPrice: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
