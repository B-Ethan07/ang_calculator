import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { PokemonService } from './../common/pokemon-service';
import { CardPokemon } from './../models/CardPokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.css']
})
export class PokemonList {
  cards: CardPokemon[] = [];
  loading: boolean = true;

  constructor(private pokemonService: PokemonService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.toastr.info('Chargement des cartes Pokémon');
    this.pokemonService.getCards().subscribe({
      next: (cards) => {
        this.cards = cards;
      },
      error: (err) => {
        this.toastr.error('Erreur lors du chargement des cartes Pokémon');
        console.error('Erreur lors du chargement des cartes Pokémon', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
