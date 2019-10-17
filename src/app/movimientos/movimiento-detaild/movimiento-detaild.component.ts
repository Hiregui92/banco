import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MovimientosService } from '../../services/movimientos.service';
import { Movimento } from '../../models';

import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-movimiento-detaild',
	templateUrl: './movimiento-detaild.component.html',
	styleUrls: ['./movimiento-detaild.component.css']
})
export class MovimientoDetaildComponent implements OnInit {

	currentCuenta : Movimento;
	movimientoForm;
	currentId;

	constructor(private _route: ActivatedRoute, 
		private _cuentaService: MovimientosService,
		private formBuilder: FormBuilder) { }

	ngOnInit() {
		this._route.params
		.pipe(map(params => params['id']))
		.subscribe((id) => {
			this.currentId = id;
			this.currentCuenta = this._cuentaService.getMovimiento(id);
		});

		this.movimientoForm = this.formBuilder.group({
			tipo: this.currentCuenta.tipo,
			fecha: '',
			valor: 0,
		});
	}

	onSubmit(cuentaData) {
		this._cuentaService.editMovimiento(this.currentId, cuentaData);
		// Process checkout data here
		console.warn('Your order has been submitted', cuentaData);

	}

}
