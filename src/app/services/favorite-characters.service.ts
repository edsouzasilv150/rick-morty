import { FavoriteCharacters, ListaPersonagen } from './../components/models/Lista-Personagens';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavoriteCharactersService {
  private characters: FavoriteCharacters[] = [];

  private charactersSubject: BehaviorSubject<FavoriteCharacters[]> = new BehaviorSubject<FavoriteCharacters[]>(this.characters);

  constructor() { }

  getCharacters(): Observable<FavoriteCharacters[]> {
    return this.charactersSubject.asObservable();
  }

  toggleFavorite(id: number): void {
    const index = this.characters.findIndex(character => character.id === id);
    if (index !== -1) {
      this.characters[index].favorited = !this.characters[index].favorited;
      this.charactersSubject.next([...this.characters]);
    }
  }

  getFavoriteCharacters(): Observable<FavoriteCharacters[]> {
    return this.charactersSubject.pipe(
      map(characters => characters.filter(character => character.favorited))
    );
  }
}
