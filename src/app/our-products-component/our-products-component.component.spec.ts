import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsComponentComponent } from './our-products-component.component';

describe('OurProductsComponentComponent', () => {
  let component: OurProductsComponentComponent;
  let fixture: ComponentFixture<OurProductsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurProductsComponentComponent]
    });
    fixture = TestBed.createComponent(OurProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
