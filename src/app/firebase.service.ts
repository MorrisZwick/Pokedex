import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pokemon } from './pokedex/pokemon.module';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private angularfirestore: AngularFirestore) { }
  
  createFavoritePokemon(pokemon: Pokemon) {
    return new Promise<any>((resolve, reject) => {
      this.angularfirestore
        .collection('pokemon-data')
        .add(pokemon)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  getFavoritePokemon() {
    return this.angularfirestore
      .collection('pokemon-data')
      .snapshotChanges();
  }

  deletePokemon(pokemon) {
    return this.angularfirestore
      .collection('pokemon-data')
      .doc(pokemon.id)
      .delete();
  }

}