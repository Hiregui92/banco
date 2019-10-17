import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentasListComponent } from './cuentas-list/cuentas-list.component';
import { CuentasDetailComponent } from './cuentas-detail/cuentas-detail.component';

const routes: Routes = [
	{ 
    	path: '', component: CuentasListComponent 
    },
	{
      path: '/detail/:id',
      component: CuentasDetailComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasRoutingModule { }
