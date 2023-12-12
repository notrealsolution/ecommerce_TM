import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaComponentComponent } from './entrada-component.component';

describe('EntradaComponentComponent', () => {
  let component: EntradaComponentComponent;
  let fixture: ComponentFixture<EntradaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaComponentComponent]
    });
    fixture = TestBed.createComponent(EntradaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
