import { Injectable } from '@angular/core';

import { Cliente } from '../models';
import { clientes } from '../../assets/clientes';

@Injectable({
	providedIn: 'root'
})
export class ClienteService {

	items=[];

	constructor() { 
		if (this.items.length == 0) {
			this.items = clientes;
		}
	}

	addClient(cliente) {
		this.items.push(cliente);
		console.log(this.items);
	}

	editClient(id, cliente) {
		console.log(id, cliente);
		if (this.items.length > 0) {
			if (this.items[id]) {
				this.items[id].name = cliente.name;
				this.items[id].phone = cliente.phone;
				this.items[id].direction = cliente.direction;
			}
		}
	}

	getClients() {
		return this.items;
	}

	getClient(id) {
		console.log(id);
		console.log(this.items);
		if (this.items.length > 0) {
			if (this.items[id]) {
				return this.items[id]
			}
		}
		return Cliente;
	}

	removeClient(id) {
		this.items.splice(id, 1);
		return this.items;
	}
}
