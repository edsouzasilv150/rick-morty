import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuscaNaoEncontradaComponent } from './components/busca-nao-encontrada/busca-nao-encontrada.component';
import { SemFavoritosComponent } from './components/sem-favoritos/sem-favoritos.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nao-encontrado', component: BuscaNaoEncontradaComponent },
  { path: 'sem-favorito', component: SemFavoritosComponent },
  { path: 'favoritos', component: FavoritosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
