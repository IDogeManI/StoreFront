import { ProductService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductDto } from '../models/product.model';

@Component({
  selector: 'app-adminproductcard',
  templateUrl: './admin.product.card.component.html',
  styleUrls: ['./admin.product.card.component.scss'],
})
export class AdminProductCardComponent implements OnInit {
  @Input() product: ProductDto;
  editMode: boolean = false;
  productName: string;
  productDescriptopn: string;
  productImageUrl: string;
  productPrice: number;

  constructor(private productService: ProductService) {}

  onEditClick() {
    this.editMode = true;
  }
  onApplyClick() {
    this.product.name = this.productName;
    this.product.description = this.productDescriptopn;
    this.product.imageUrl = this.productImageUrl;
    this.product.price = this.productPrice;
    this.productService.changeProduct(this.product);
    this.editMode = false;
  }
  ngOnInit(): void {
    this.productName = this.product.name;
    this.productDescriptopn = this.product.description;
    this.productImageUrl = this.product.imageUrl;
    this.productPrice = this.product.price;
  }
}
