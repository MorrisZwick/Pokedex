import { Component, Input, OnInit } from '@angular/core';
import { PokedexApiService } from './pokedex-api.service';
import { Pokemon } from './pokemon.module';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styles: [`
    .position{
     padding:bottom-right-left 10%
    }
    `]
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];




  constructor(private pkmnService: PokedexApiService) { }

  ngOnInit() {
    this.pkmnService.getdata()
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          this.pkmnService.getmoredata(result.name)
            .subscribe((uniqueResponse: Pokemon) => {
              console.log(uniqueResponse)
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }

}
