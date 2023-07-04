import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductDto } from '../models/product.model';
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
  deleteFromCart(product: ProductDto) {
    this.cartService.deleteProductFromCart(product);
  }
  buyRequest() {
    this.productService.buyRequest(
      this.adress,
      this.cartService.productsInCart
    );
  }
}
