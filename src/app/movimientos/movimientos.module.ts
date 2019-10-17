import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule } from './movimientos-routing.module';
import { MovimientoListComponent } from './movimiento-list/movimiento-list.component';
import { MovimientoDetaildComponent } from './movimiento-detaild/movimiento-detaild.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovimientoListComponent, MovimientoDetaildComponent],
  imports: [
    CommonModule,
    MovimientosRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovimientosModule { }
