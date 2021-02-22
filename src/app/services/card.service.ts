import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, delay, } from "rxjs/operators";

import { BinModule } from "../models/bin";
import { LiveModule } from "../models/lives";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  servidor_backend = 'http://127.0.0.1:5000';

  constructor( private http: HttpClient ) { }

  postTarjetas(bin: BinModule) {
    return this.http.post(`${ this.servidor_backend }/bin.json`, bin)
    .pipe(
      map( (resp: any) => {
        return bin;
      })
    );
  }
  // /extrapolacion/metodo-bancario
  // /extrapolacion/identificacion-logica
  // /extrapolacion/avanzada
  // /extrapolacion/activacion
  // /extrapolacion/similitud


}
