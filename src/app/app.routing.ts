import { Routes, RouterModule } from "@angular/router"
import { DetailsComponent } from "./pokedex/pokedex-details/details.component";
import { PokedexComponent } from "./pokedex/pokedex.component";
import { FavoritesComponent } from "./pokedex/favorites/favorites.component";





const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
    { path: 'pokedex/details/:id', component: DetailsComponent },
    { path: 'pokedex/favorite', component: FavoritesComponent },
    { path: 'pokedex', component: PokedexComponent },


];
export const routing = RouterModule.forRoot(APP_ROUTES);