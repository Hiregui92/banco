import { Injectable } from '@angular/core';

import { Movimento } from '../models';
import { movimientos } from '../../assets/movimientos';

@Injectable({
	providedIn: 'root'
})
export class MovimientosService {

	items=[];

	constructor() { 
		if (this.items.length == 0) {
			this.items = movimientos;
		}
	}

	addMovimiento(Movimiento) {
		this.items.push(Movimiento);
		console.log(this.items);
	}

	editMovimiento(id, Movimiento) {
		console.log(id, Movimiento);
		if (this.items.length > 0) {
			if (this.items[id]) {
				//this.items[id].number = Movimiento.number;
			}
		}
	}

	getMovimientos() {
		return this.items;
	}

	getMovimiento(id) {
		console.log(id);
		console.log(this.items);
		if (this.items.length > 0) {
			if (this.items[id]) {
				return this.items[id]
			}
		}
		return movimientos;
	}

	removeMovimiento(id) {
		this.items.splice(id, 1);
		return this.items;
	}
}
