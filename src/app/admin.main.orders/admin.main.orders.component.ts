import { Component, OnInit } from '@angular/core';
import { OrderDto } from '../models/order.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-adminmainorders',
  templateUrl: './admin.main.orders.component.html',
  styleUrls: ['./admin.main.orders.component.scss'],
})
export class AdminMainOrdersComponent implements OnInit {
  filterText: string;
  orders: OrderDto[];
  constructor(public productService: ProductService) {}
  filteArray() {
    this.orders = this.productService.allOrders.filter((x) =>
      x.id.toUpperCase().includes(this.filterText.toUpperCase())
    );
  }

  ngOnInit(): void {
    this.productService.fetchAllOrders();
    this.orders = this.productService.allOrders;
  }
}
