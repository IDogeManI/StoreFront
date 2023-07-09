import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainProductsComponent } from './admin.main.products.component';

describe('AdminMainProductsComponent', () => {
  let component: AdminMainProductsComponent;
  let fixture: ComponentFixture<AdminMainProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMainProductsComponent]
    });
    fixture = TestBed.createComponent(AdminMainProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
