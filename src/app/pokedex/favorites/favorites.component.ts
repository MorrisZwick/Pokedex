import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { PokedexApiService } from '../pokedex-api.service';
import { Pokemon } from '../pokemon.module';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  selectedpokemons!: Pokemon[];
  show = true;
  Btnshow = true;

  constructor(private pkmnService: PokedexApiService, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getFavoritePokemon().subscribe((data: any) => {
      this.selectedpokemons = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          sprites: e.payload.doc.data()['sprites'],

        };
      })
      console.log(this.selectedpokemons)
    });
  }


  removePokemon(pokemon) {
    this.firebaseService.deletePokemon(pokemon);
    console.log(pokemon)
  }
}






