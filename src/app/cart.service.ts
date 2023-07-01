import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  countProductsInCart: number = 0;
  productsInCart: Product[] = [];
  constructor() {}
  addProductToCart(product: Product) {
    this.productsInCart.push(product);
    this.countProductsInCart++;
  }
  deleteProductFromCart(product: Product) {
    this.productsInCart.splice(this.productsInCart.indexOf(product), 1);
    this.countProductsInCart--;
  }
}
