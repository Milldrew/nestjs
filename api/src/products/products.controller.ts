import {
  Delete,
  Put,
  Param,
  Get,
  Body,
  Post,
  Controller,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Delete()
  deleteProduct(@Body('id') id: string): any {
    const deletedProduct = this.productsService.deleteProduct(id);
    return deletedProduct;
  }
  @Put()
  updateProduct(
    @Body('id') id: string,
    @Body('title') prodTitle: string,
    @Body('description') desc: string,
    @Body('price') price: number,
  ): any {
    const updatedProduct = this.productsService.updateProduct(
      id,
      prodTitle,
      desc,
      price,
    );
    return updatedProduct;
  }
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') desc: string,
    @Body('price') price: number,
  ): any {
    const productId = this.productsService.insertProduct(
      prodTitle,
      desc,
      price,
    );
    return { productId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getSingleProduct(id);
  }
}
