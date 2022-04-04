import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/firebase.service';
import { PokedexApiService } from '../pokedex-api.service';
import { Pokemon } from '../pokemon.module';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedpokemons!: Pokemon;
  show = true;
  BtnShow = true;




  constructor(
    private pkmnService: PokedexApiService,
    private firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }



  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.pkmnService.getById(+params['id']).subscribe(res => { this.selectedpokemons = res; console.log(res) });
        console.log(params['id'])
      }
    )

  };

  goForth() {
    this.router.navigate(['pokedex/details/', this.selectedpokemons.id + 1])
  }
  goBack() {
    this.router.navigate(['pokedex/details/', this.selectedpokemons.id - 1])
  }
  onSubmit() {
    let newPokemon: Pokemon = {
      name: this.selectedpokemons.name,
      id: this.selectedpokemons.id,
      weight: this.selectedpokemons.weight,
      height: this.selectedpokemons.height,
      types: this.selectedpokemons.types,
      sprites: this.selectedpokemons.sprites,
      stats: this.selectedpokemons.stats,
      abilities: this.selectedpokemons.abilities,
      moves: this.selectedpokemons.moves,
    }
    console.log("THIS MOVES??");
    console.log(this.selectedpokemons);
    console.log(newPokemon);
    this.firebaseService.createFavoritePokemon(newPokemon);
  };


}



