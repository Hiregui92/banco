import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoDetaildComponent } from './movimiento-detaild.component';

describe('MovimientoDetaildComponent', () => {
  let component: MovimientoDetaildComponent;
  let fixture: ComponentFixture<MovimientoDetaildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoDetaildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoDetaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
