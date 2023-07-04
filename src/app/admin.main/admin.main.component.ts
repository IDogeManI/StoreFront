import { ProductDto } from './../models/product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminmain',
  templateUrl: './admin.main.component.html',
  styleUrls: ['./admin.main.component.scss'],
})
export class AdminMainComponent implements OnInit {
  constructor(public productService: ProductService) {}
  ngOnInit(): void {
    this.productService.fetchAllProducts();
  }
}
