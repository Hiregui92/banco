import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models';

import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-cliente-detail',
	templateUrl: './cliente-detail.component.html',
	styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

	currentClient : Cliente;
	clientForm;
	currentId;

	constructor(private _route: ActivatedRoute, 
		private _clienteService: ClienteService,
		private router: Router,
		private formBuilder: FormBuilder) { }

	ngOnInit() {
		this._route.params
		.pipe(map(params => params['id']))
		.subscribe((id) => {
			this.currentId = id;
			this.currentClient = this._clienteService.getClient(id);
		});

		this.clientForm = this.formBuilder.group({
			name: this.currentClient.name,
			phone: this.currentClient.phone,
			direction: this.currentClient.direction
		});
	}

	onSubmit(clientData) {
		if (this.currentId >= 0) {
			this._clienteService.editClient(this.currentId, clientData);
		} else {
			this._clienteService.addClient(clientData);
			this.router.navigate(['/clientes']);
		}
		// Process checkout data here
		console.warn('Your order has been submitted', clientData);

	}
}
