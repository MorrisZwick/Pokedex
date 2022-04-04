import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexListComponent } from './pokedex/pokedex-list.component';
import { DetailsComponent } from './pokedex/pokedex-details/details.component';
import { FavoritesComponent } from './pokedex/favorites/favorites.component';


import { DropdownDirective } from './header/dropdown.directive';

import { PokedexApiService } from './pokedex/pokedex-api.service';
import { FirebaseService } from './firebase.service';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokedexComponent,
    DetailsComponent,
    PokedexListComponent,
    FavoritesComponent,

    DropdownDirective,

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    PokedexApiService,
    FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
