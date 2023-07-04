import { Injectable } from '@angular/core';
import { ProductDto } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  countProductsInCart: number = 0;
  productsInCart: ProductDto[] = [];
  constructor() {}
  addProductToCart(product: ProductDto) {
    this.productsInCart.push(product);
    this.countProductsInCart++;
  }
  deleteProductFromCart(product: ProductDto) {
    this.productsInCart.splice(this.productsInCart.indexOf(product), 1);
    this.countProductsInCart--;
  }
}
