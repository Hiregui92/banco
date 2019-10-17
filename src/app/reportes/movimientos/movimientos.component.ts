import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { ClienteService } from '../../services/cliente.service';
import { Cliente, Movimento } from '../../models';

@Component({
	selector: 'app-movimientos',
	templateUrl: './movimientos.component.html',
	styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
	movForm;
	clientes : Cliente[];
	res: Movimento[];
	constructor(private _clienteService: ClienteService, private formBuilder: FormBuilder) { 
	}

	ngOnInit() {
		this.movForm = this.formBuilder.group({
			start: '',
			end: '',
			cliente: '',
		});
		this.clientes = this._clienteService.getClients(); 
	}

}
