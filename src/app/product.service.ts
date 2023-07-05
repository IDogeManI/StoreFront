import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDto } from './models/product.model';
import { OrderDto } from './models/order.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public allProducts: ProductDto[] = [];
  constructor(
    private httpClient: HttpClient,
    private cartService: CartService
  ) {}
  fetchAllProducts() {
    // this.httpClient
    //   .get<Product[]>('http://localhost:5126/api/Product')
    //   .subscribe((res) => {
    //     this.allProducts = res;
    //     this.cartService.productsInCart.forEach((product) => {
    //       this.deleteFromProducts(product);
    //     });
    //     return "Success";
    //   });
    this.allProducts = [
      new ProductDto(
        'SomeId',
        'Ba',
        'lorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasd',
        '../assets/boots.png',
        99
      ),
      new ProductDto(
        'SomeId',
        'RT',
        'lorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasd',
        '../assets/boots.png',
        99
      ),
      new ProductDto(
        'sd',
        'Name',
        'lorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasd',
        '../assets/boots.png',
        99
      ),
      new ProductDto(
        'ga',
        'Name',
        'lorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasd',
        '../assets/boots.png',
        99
      ),
      new ProductDto(
        'SomeId',
        'Name',
        'lorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasd',
        '../assets/boots.png',
        99
      ),
      new ProductDto(
        'SomeId',
        'Name',
        'lorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasdlorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasd',
        '../assets/boots.png',
        99
      ),
      new ProductDto(
        'SomeId',
        'Name',
        'lorem assssssss    sddsds             sadasd                sadasda ddsdadsd          asdasd',
        '../assets/boots.png',
        99
      ),
    ];
  }
  changeProduct(product: ProductDto) {
    this.httpClient.put('http://localhost:5126/api/Product', product);
  }
  buyRequest(adress: string, products: ProductDto[]) {
    let tmp: OrderDto = new OrderDto(adress, products);
    // // this.httpClient
    // //   .post('http://localhost:5126/api/Product', tmp)
    // //   .subscribe((res) => {
    // //     tmp.products.forEach((product) => {
    // //       this.cartService.deleteProductFromCart(product);
    // //     });
    // //     console.log(res);
    // //   });
  }
  deleteFromProducts(product: ProductDto) {
    this.allProducts.splice(this.allProducts.indexOf(product), 1);
  }
}
