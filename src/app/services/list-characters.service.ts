import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse, ListaPersonagen } from '../components/models/Lista-Personagens';

@Injectable({
  providedIn: 'root'
})
export class ListCharactersService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  private characters:  ListaPersonagen[] = [];

  private charactersSubject: BehaviorSubject<ListaPersonagen[]> = new BehaviorSubject<ListaPersonagen[]>(this.characters);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl)
  }

  toggleFavorite(id: number): void {
    const index = this.characters.findIndex(character => character.id === id);
    if (index !== -1) {
      this.characters[index].favorited = !this.characters[index].favorited;
      this.charactersSubject.next([...this.characters]);
    }
  }

  getFavoriteCharacters(): Observable<ListaPersonagen[]> {
    return this.charactersSubject.asObservable();
  }
}

