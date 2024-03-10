import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListaPersonagen } from '../models/Lista-Personagens';
import { ListCharactersService } from 'src/app/services/list-characters.service';
import { FavoriteCharactersService } from '../../services/favorite-characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPersonagens: ListaPersonagen[] = [];
  personagemSearch: ListaPersonagen[] = [];

  constructor(private listCharactersService: ListCharactersService,
    private favoritecharacterService: FavoriteCharactersService,
    private router: Router) {}

  ngOnInit(): void {
    this.listCharactersService.getAll().subscribe(resp => {
      this.listaPersonagens = resp.results;
    });

    this.listCharactersService.getAll().subscribe(resp => {
      this.personagemSearch = resp.results;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.listaPersonagens = this.personagemSearch.filter((personagem) => {
      return personagem.name.toLocaleLowerCase().includes(value);
    });

    if (this.listaPersonagens.length === 0) {
      this.router.navigate(['/nao-encontrado']);
    }
  }

  adicionarFavorito(personagem: ListaPersonagen): void {
    this.favoritecharacterService.adicionarFavorito(personagem);
    const favoritos = this.favoritecharacterService.obterFavoritos();
    const totalFavoritos = favoritos.length;
    this.favoritecharacterService.atualizarContadorFavoritos(totalFavoritos);
  }

  isFavorito(personagem: ListaPersonagen): Observable<boolean> {
    return this.favoritecharacterService.isFavorito(personagem);
  }
}

