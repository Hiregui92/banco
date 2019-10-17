import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MovimientosComponent } from './movimientos/movimientos.component';

const routes: Routes = [
	{ 
    	path: '', component: MovimientosComponent 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
