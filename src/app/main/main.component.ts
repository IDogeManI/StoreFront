import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDto } from '../models/product.model';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private cartService: CartService,
    public productService: ProductService
  ) {}
  ngOnInit() {
    this.productService.fetchAllProducts();
  }
  onAddToCart(product: ProductDto) {
    this.productService.deleteFromProducts(product);
    this.cartService.addProductToCart(product);
  }
}
