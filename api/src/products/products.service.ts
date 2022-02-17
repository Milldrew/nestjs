import { NotFoundException, Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    console.log('this.products', this.products);
    return prodId;
  }

  deleteProduct(id: string) {
    console.log('from delete');
    console.log({ id });
    const prodIndex = this.products.findIndex((product) => product.id === id);
    const PRODUCT_NOT_FOUND = -1;
    if (prodIndex === PRODUCT_NOT_FOUND) {
      throw new NotFoundException('product not found');
    }
    console.log('prodindex', { prodIndex });
    const deletedProduct: Product = this.products.splice(prodIndex, 1)[0];
    return deletedProduct;
  }
  updateProduct(id: string, prodTitle: string, desc: string, price: number) {
    console.log('hello from update product');
    console.log({ id, prodTitle, desc, price });
    const prodIndex = this.products.findIndex((product) => product.id === id);
    const PRODUCT_NOT_FOUND = -1;
    if (prodIndex === PRODUCT_NOT_FOUND) {
      throw new NotFoundException('product not found');
    }
    console.log('prodindex', { prodIndex });
    const targetProduct: Product = this.products.splice(prodIndex, 1)[0];
    console.log({ targetProduct });
    Object.assign(targetProduct, {
      title: prodTitle,
      description: desc,
      price,
    });
    this.products.push(targetProduct);
    return targetProduct;
  }
  getProducts() {
    console.log('from get products');
    return [...this.products];
  }
  getSingleProduct(id: any) {
    console.log('id', id);
    const product = this.products.find((product) => {
      console.log(product.id, id);
      console.log(product.id === id);

      return product.id === id;
    });
    console.log('product', product);
    if (!product) {
      throw new NotFoundException();
    }
    return { ...product };
  }
}
