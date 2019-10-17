import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { CuentasListComponent } from './cuentas-list/cuentas-list.component';
import { CuentasDetailComponent } from './cuentas-detail/cuentas-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CuentasListComponent, CuentasDetailComponent],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CuentasModule { }
