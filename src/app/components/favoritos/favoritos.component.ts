import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListaPersonagen } from '../models/Lista-Personagens';
import { FavoriteCharactersService } from 'src/app/services/favorite-characters.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  @Input() favoriteCharacters: ListaPersonagen[] = [];

  constructor(private favoritecharacterService: FavoriteCharactersService, private router: Router) { }

  ngOnInit(): void {
    this.favoritecharacterService.favoritos$.subscribe(favoritos => {
      this.favoriteCharacters = favoritos;

      if (this.favoriteCharacters.length === 0) {
        this.router.navigate(['/sem-favorito']);
      }
    });
  }

  removerFavorito(personagem: ListaPersonagen): void {
    this.favoritecharacterService.removerFavorito(personagem);
    const favoritos = this.favoritecharacterService.obterFavoritos();
    const totalFavoritos = favoritos.length;
    this.favoritecharacterService.atualizarContadorFavoritos(totalFavoritos);
  }
}
