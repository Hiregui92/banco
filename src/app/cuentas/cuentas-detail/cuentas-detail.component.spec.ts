import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasDetailComponent } from './cuentas-detail.component';

describe('CuentasDetailComponent', () => {
  let component: CuentasDetailComponent;
  let fixture: ComponentFixture<CuentasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
