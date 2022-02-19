import { NotFoundException, Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number, imgUrl: string) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price, imgUrl);
    this.products.push(newProduct);
    return prodId;
  }

  deleteProduct(id: string) {
    const prodIndex = this.products.findIndex((product) => product.id === id);
    const PRODUCT_NOT_FOUND = -1;
    if (prodIndex === PRODUCT_NOT_FOUND) {
      throw new NotFoundException('product not found');
    }
    const deletedProduct: Product = this.products.splice(prodIndex, 1)[0];
    return deletedProduct;
  }
  updateProduct(
    id: string,
    prodTitle: string,
    desc: string,
    price: number,
    imgUrl: string,
  ) {
    const prodIndex = this.products.findIndex((product) => product.id === id);
    const PRODUCT_NOT_FOUND = -1;
    if (prodIndex === PRODUCT_NOT_FOUND) {
      throw new NotFoundException('product not found');
    }
    const targetProduct: Product = this.products.splice(prodIndex, 1)[0];
    Object.assign(targetProduct, {
      title: prodTitle,
      description: desc,
      price,
      imgUrl,
    });
    this.products.push(targetProduct);
    return targetProduct;
  }
  getProducts() {
    return [...this.products];
  }
  getSingleProduct(id: any) {
    const product = this.products.find((product) => {
      return product.id === id;
    });
    if (!product) {
      throw new NotFoundException();
    }
    return { ...product };
  }
}
