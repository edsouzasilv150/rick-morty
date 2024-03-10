import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged,map } from 'rxjs';

import { ListaPersonagen } from './../components/models/Lista-Personagens';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCharactersService {
  private favoritosSubject: BehaviorSubject<ListaPersonagen[]> = new BehaviorSubject<ListaPersonagen[]>([]);
  favoritos$: Observable<ListaPersonagen[]> = this.favoritosSubject.asObservable();

  private favoritosCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  favoritosCount$: Observable<number> = this.favoritosCountSubject.asObservable();


  constructor() { }

  atualizarContadorFavoritos(total: number): void {
    this.favoritosCountSubject.next(total);
  }

  adicionarFavorito(personagem: ListaPersonagen): void {
    const favoritosAtuais = this.favoritosSubject.getValue();
    const existe = favoritosAtuais.some(p => p.id === personagem.id);
    if (!existe) {
      favoritosAtuais.push(personagem);
      this.favoritosSubject.next(favoritosAtuais);
    }
  }

  removerFavorito(personagem: ListaPersonagen): void {
    const favoritosAtuais = this.favoritosSubject.getValue();
    const index = favoritosAtuais.findIndex(p => p.id === personagem.id);
    if (index !== -1) {
      favoritosAtuais.splice(index, 1);
      this.favoritosSubject.next(favoritosAtuais);
    }
  }

  isFavorito(personagem: ListaPersonagen): Observable<boolean> {
    return this.favoritos$.pipe(
      map(favoritos => favoritos.some(fav => fav.id === personagem.id)),
      distinctUntilChanged()
    );
  }

 obterFavoritos(): ListaPersonagen[] {
    return this.favoritosSubject.getValue();
  }
}
