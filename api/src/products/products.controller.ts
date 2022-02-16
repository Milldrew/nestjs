import { Body, Post, Controller } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
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
}
