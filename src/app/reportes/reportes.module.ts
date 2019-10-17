import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovimientosComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReportesModule { }
