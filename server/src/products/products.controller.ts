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
  HttpCode,
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
  async findAll() {
    return this.productsService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const product = await this.productsService.findOne({ _id: id });

      if (!product)
        throw new NotFoundException(`Product with id: ${id} not found`);

      return product;
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
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const product = await this.productsService.findOne({ _id: id });

    if (!product)
      throw new NotFoundException(`Product with id: '${id}' not found`);

    return this.productsService.remove(id);
  }
}
