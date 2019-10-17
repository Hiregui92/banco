import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../models';
import { ClienteService } from '../../services/cliente.service';

@Component({
	selector: 'app-cliente-list',
	templateUrl: './cliente-list.component.html',
	styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

	clientes : Cliente[];

	constructor(private _clienteService: ClienteService) { }

	ngOnInit() {
		this.clientes = this._clienteService.getClients();

	}

	eliminar(id) {
		this._clienteService.removeClient(id);
		alert("Elemento eliminado");
	}

}
