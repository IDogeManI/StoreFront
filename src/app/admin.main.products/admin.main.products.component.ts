import { Component, OnInit } from '@angular/core';
import { OrderDto } from '../models/order.model';
import { ProductDto } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-adminmainproducts',
  templateUrl: './admin.main.products.component.html',
  styleUrls: ['./admin.main.products.component.scss'],
})
export class AdminMainProductsComponent implements OnInit {
  filterText: string;
  products: ProductDto[];
  constructor(public productService: ProductService) {}
  filteArray() {
    this.products = this.productService.allProducts.filter((x) =>
      x.name.toUpperCase().includes(this.filterText.toUpperCase())
    );
  }
  ngOnInit(): void {
    this.productService.fetchAllProducts();
    this.products = this.productService.allProducts;
  }
}
