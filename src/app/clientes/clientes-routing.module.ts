import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
/*import { CuentasListComponent } from '../cuentas/cuentas-list/cuentas-list.component';*/

const routes: Routes = [
	{ 
    	path: '', component: ClienteListComponent 
    },
  { 
      path: 'create', component: ClienteDetailComponent 
    },
/*    {
      path: 'detail/:id/cuentas',
      component: CuentasListComponent
    },*/
	{
      path: 'detail/:id',
      component: ClienteDetailComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
