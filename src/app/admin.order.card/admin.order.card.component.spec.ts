import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderCardComponent } from './admin.order.card.component';

describe('AdminOrderCardComponent', () => {
  let component: AdminOrderCardComponent;
  let fixture: ComponentFixture<AdminOrderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderCardComponent]
    });
    fixture = TestBed.createComponent(AdminOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});