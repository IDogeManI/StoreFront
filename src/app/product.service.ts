import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { Order } from './models/order.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public allProducts: Product[] = [];
  constructor(
    private httpClient: HttpClient,
    private cartService: CartService
  ) {}
  fetchAllProducts() {
    this.httpClient
      .get<Product[]>('http://localhost:5126/api/Product')
      .subscribe((res) => {
        this.allProducts = res;
        this.cartService.productsInCart.forEach((product) => {
          this.deleteFromProducts(product);
        });
      });
  }
  buyRequest(adress: string, products: Product[]) {
    let tmp: Order = new Order(adress, products);
    this.httpClient
      .post('http://localhost:5126/api/Product', tmp)
      .subscribe((res) => {
        tmp.products.forEach((product) => {
          this.cartService.deleteProductFromCart(product);
        });
        console.log(res);
      });
  }
  deleteFromProducts(product: Product) {
    this.allProducts.splice(this.allProducts.indexOf(product), 1);
  }
}
