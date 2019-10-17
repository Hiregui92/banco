import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, empty, of } from 'rxjs';
import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';
import { Anuncio } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {

  constructor(private _http: HttpClient) { }

  // Get data about artist that has been chosen to view
  getAnuncios(): any {
  	console.log(environment.urlApi);
    return this._http.get(environment.urlApi)
      .pipe(map(res => res));
  }
}
