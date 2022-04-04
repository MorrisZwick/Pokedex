import { Component, Input, OnInit } from '@angular/core';
import { PokedexApiService } from './pokedex-api.service';
import { Pokemon } from './pokemon.module';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {
  @Input()
  pokemon: Pokemon | undefined;

  constructor() {

  }
  ngOnInit(): void {

  }

}