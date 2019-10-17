import { Component, OnInit } from '@angular/core';

import { Cuentas } from '../../models';
import { CuentasService } from '../../services/cuentas.service';

@Component({
	selector: 'app-cuentas-list',
	templateUrl: './cuentas-list.component.html',
	styleUrls: ['./cuentas-list.component.css']
})
export class CuentasListComponent implements OnInit {

	cuentas : Cuentas[];

	constructor(private _cuentaService: CuentasService) { }

	ngOnInit() {

		this.cuentas = this._cuentaService.getCuentas();

	}

}
