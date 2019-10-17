import { Component, OnInit } from '@angular/core';

import { PublicidadService } from '../services/publicidad.service';

@Component({
	selector: 'app-publicidad',
	templateUrl: './publicidad.component.html',
	styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {
	public anuncio;
	constructor(private _publicidadService: PublicidadService) { }

	ngOnInit() {
		this._publicidadService.getAnuncios().subscribe(res => {
			console.log(res);
			this.anuncio =  res;
		});
		console.log('anuncio');
		console.log(this.anuncio);
	}

}
