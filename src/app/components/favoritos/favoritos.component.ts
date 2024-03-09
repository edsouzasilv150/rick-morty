import { Component, OnInit } from '@angular/core';
import { FavoriteCharactersService } from 'src/app/services/favorite-characters.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private favoriteCharactersService: FavoriteCharactersService ) { }

  ngOnInit(): void {
    this.favoriteCharactersService.getCharacters().subscribe(resp => {
      console.log(resp + 'chegou aqui no componente')
    });
  }

}
