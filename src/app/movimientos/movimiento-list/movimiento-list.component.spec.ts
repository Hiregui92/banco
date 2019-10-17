import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoListComponent } from './movimiento-list.component';

describe('MovimientoListComponent', () => {
  let component: MovimientoListComponent;
  let fixture: ComponentFixture<MovimientoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
