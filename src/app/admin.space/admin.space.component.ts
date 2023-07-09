import { Component } from '@angular/core';

@Component({
  selector: 'app-admin.space',
  templateUrl: './admin.space.component.html',
  styleUrls: ['./admin.space.component.scss'],
})
export class AdminSpaceComponent {
  isAuthorized: boolean = true;
  isOrders: boolean = true;
}
