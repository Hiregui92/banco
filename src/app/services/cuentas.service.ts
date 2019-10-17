import { Injectable } from '@angular/core';

import { Cuentas } from '../models';
import { cuentas } from '../../assets/cuentas';

@Injectable({
	providedIn: 'root'
})
export class CuentasService {

	items=[];

	constructor() { 
		if (this.items.length == 0) {
			this.items = cuentas;
		}
	}

	addCuenta(cuenta) {
		this.items.push(cuenta);
		console.log(this.items);
	}

	editCuenta(id, cuenta) {
		console.log(id, cuenta);
		if (this.items.length > 0) {
			if (this.items[id]) {
				this.items[id].number = cuenta.number;
			}
		}
	}

	getCuentas() {
		return this.items;
	}

	getCuenta(id) {
		console.log(id);
		console.log(this.items);
		if (this.items.length > 0) {
			if (this.items[id]) {
				return this.items[id]
			}
		}
		return cuentas;
	}

	removeCuenta(id) {
		this.items.splice(id, 1);
		return this.items;
	}
}
