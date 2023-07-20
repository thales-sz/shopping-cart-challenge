import { IsNotEmpty, IsNumber } from 'class-validator';
import { AbstractDocument } from 'src/database/abstract.schema';
import { Product } from 'src/products/schema/products.schema';

export class CreateOrderDto extends AbstractDocument {
  @IsNotEmpty()
  product: Product[];

  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}
