import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.findOne({
      name: createProductDto.name,
    });

    if (product) throw new ConflictException(`This product already exists`);

    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const product = this.productsService.findOne({ _id: id });

    if (!product)
      throw new NotFoundException(`Product with id: '${id}' not found`);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.productsService.findOne({ _id: id });

    return this.productsService.remove(id);
  }
}
