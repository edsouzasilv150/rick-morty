import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListaPersonagen } from '../models/Lista-Personagens';
import { ListCharactersService } from 'src/app/services/list-characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPersonagens: ListaPersonagen[] = [];
  personagemSearch: ListaPersonagen[] = [];

  constructor(private listCharactersService: ListCharactersService,
    private router: Router) {}

  ngOnInit(): void {
    this.listCharactersService.getAll().subscribe(resp => {
      this.listaPersonagens = resp.results;
    });

    this.listCharactersService.getAll().subscribe(resp => {
      this.personagemSearch = resp.results;
    });
  }

  // search(e: Event): void {
  //   const target = e.target as HTMLInputElement;
  //   const value = target.value;

  //   this.listaPersonagens = this.personagemSearch.filter((personagem) => {
  //     return personagem.name.toLocaleLowerCase().includes(value);
  //   });
  // }

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
}

