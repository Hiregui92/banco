import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { 
    	path: '', component: HomeComponent 
    },
    { 
    	path: 'clientes',
	 	loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) 
    },
    { 
        path: 'cuentas',
         loadChildren: () => import('./cuentas/cuentas.module').then(m => m.CuentasModule) 
    },
    { 
        path: 'movimientos',
         loadChildren: () => import('./movimientos/movimientos.module').then(m => m.MovimientosModule) 
    },
    { 
        path: 'reportes',
         loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule) 
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
