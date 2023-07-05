import { ProductDto } from './../models/product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminmain',
  templateUrl: './admin.main.component.html',
  styleUrls: ['./admin.main.component.scss'],
})
export class AdminMainComponent implements OnInit {
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
