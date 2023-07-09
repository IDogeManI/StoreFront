import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainOrdersComponent } from './admin.main.orders.component';

describe('AdminMainOrdersComponent', () => {
  let component: AdminMainOrdersComponent;
  let fixture: ComponentFixture<AdminMainOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMainOrdersComponent]
    });
    fixture = TestBed.createComponent(AdminMainOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
