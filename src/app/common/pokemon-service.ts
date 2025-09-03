
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse.interface';
import { CardPokemon } from '../models/CardPokemon.interface'



@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private baseUrl = 'https://api.pokemontcg.io/v2/cards'

    constructor( private http: HttpClient){
    }

    getCards(): Observable<CardPokemon[]> {
      return this.http.get<ApiResponse<CardPokemon[]>>(this.baseUrl).pipe(
        map(res => res.data));
    }
}
