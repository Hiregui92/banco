import { Component, OnInit } from '@angular/core';

import { Movimento } from '../../models';
import { MovimientosService } from '../../services/movimientos.service';

@Component({
	selector: 'app-movimiento-list',
	templateUrl: './movimiento-list.component.html',
	styleUrls: ['./movimiento-list.component.css']
})
export class MovimientoListComponent implements OnInit {

	movimientos : Movimento[];

	constructor(private _movimientoService: MovimientosService) { }

	ngOnInit() {
		this.movimientos = this._movimientoService.getMovimientos();
	}

}
