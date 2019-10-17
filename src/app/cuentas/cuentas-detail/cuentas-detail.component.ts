import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CuentasService } from '../../services/cuentas.service';
import { Cuentas } from '../../models';

import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-cuentas-detail',
	templateUrl: './cuentas-detail.component.html',
	styleUrls: ['./cuentas-detail.component.css']
})
export class CuentasDetailComponent implements OnInit {

	currentCuenta : Cuentas;
	cuentaForm;
	currentId;

	constructor(private _route: ActivatedRoute, 
		private _cuentaService: CuentasService,
		private formBuilder: FormBuilder) { }

	ngOnInit() {
		this._route.params
		.pipe(map(params => params['id']))
		.subscribe((id) => {
			this.currentId = id;
			this.currentCuenta = this._cuentaService.getCuenta(id);
		});

		this.cuentaForm = this.formBuilder.group({
			number: this.currentCuenta.number,
			amount: 0,
		});
	}

	onSubmit(cuentaData) {
		this._cuentaService.editCuenta(this.currentId, cuentaData);
		// Process checkout data here
		console.warn('Your order has been submitted', cuentaData);

	}

}
