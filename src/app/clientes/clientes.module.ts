import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
/*import { CuentasListComponent } from '../cuentas/cuentas-list/cuentas-list.component';*/


@NgModule({
  declarations: [ClienteListComponent, ClienteDetailComponent, /*CuentasListComponent*/],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ClientesModule { }
