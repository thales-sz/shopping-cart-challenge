import { AbstractRepository } from 'src/database/abstract.repository';
import { Product } from './schema/products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export default class ProductsRepository extends AbstractRepository<Product> {
  constructor(@InjectModel(Product.name) productModel: Model<Product>) {
    super(productModel);
  }
}
