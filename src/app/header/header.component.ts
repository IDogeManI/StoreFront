import { Component, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public cartService: CartService,
    public productService: ProductService
  ) {}
  @Output()
  turnOnCartMode: EventEmitter<boolean> = new EventEmitter();
  onButtonClick() {
    this.turnOnCartMode.emit(true);
  }
  onMainClick() {
    this.productService.fetchAllProducts();
    this.turnOnCartMode.emit(false);
  }
}
