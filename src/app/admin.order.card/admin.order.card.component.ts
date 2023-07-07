import { Component, Input } from '@angular/core';
import { OrderDto } from '../models/order.model';

@Component({
  selector: 'app-adminordercard',
  templateUrl: './admin.order.card.component.html',
  styleUrls: ['./admin.order.card.component.scss'],
})
export class AdminOrderCardComponent {
  @Input() order: OrderDto;
}
