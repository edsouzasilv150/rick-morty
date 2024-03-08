import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { BuscaNaoEncontradaComponent } from './components/busca-nao-encontrada/busca-nao-encontrada.component';
import { SemFavoritosComponent } from './components/sem-favoritos/sem-favoritos.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BuscaNaoEncontradaComponent,
    SemFavoritosComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
