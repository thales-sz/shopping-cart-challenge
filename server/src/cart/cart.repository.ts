import { AbstractRepository } from 'src/database/abstract.repository';
import { Cart } from './schema/cart.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class CartRepository extends AbstractRepository<Cart> {
  constructor(@InjectModel(Cart.name) cartModel: Model<Cart>) {
    super(cartModel);
  }
}
