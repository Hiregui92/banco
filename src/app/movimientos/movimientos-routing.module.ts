import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimientoListComponent } from './movimiento-list/movimiento-list.component';
import { MovimientoDetaildComponent  } from './movimiento-detaild/movimiento-detaild.component';

const routes: Routes = [
	{ 
    	path: '', component: MovimientoListComponent 
    },
	{
      path: '/detail/:id',
      component: MovimientoDetaildComponent
    },
    {
      path: 'create',
      component: MovimientoDetaildComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientosRoutingModule { }
