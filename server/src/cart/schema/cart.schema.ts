import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';
import { Product } from 'src/products/schema/products.schema';

@Schema({ timestamps: true })
export class Cart extends AbstractDocument {
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }], required: true })
  product?: Product[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
