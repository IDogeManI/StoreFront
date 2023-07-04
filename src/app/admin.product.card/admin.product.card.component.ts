import { Component, Input } from '@angular/core';
import { ProductDto } from '../models/product.model';

@Component({
  selector: 'app-adminproductcard',
  templateUrl: './admin.product.card.component.html',
  styleUrls: ['./admin.product.card.component.scss'],
})
export class AdminProductCardComponent {
  @Input() product: ProductDto;
  onEditClick() {}
}
