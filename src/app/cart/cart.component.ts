import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(
    public cartService: CartService,
    public productService: ProductService
  ) {}
  adress: string = 'asdf';
  deleteFromCart(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }
  buyRequest() {
    this.productService.buyRequest(
      this.adress,
      this.cartService.productsInCart
    );
  }
}
