import { Component, OnInit } from '@angular/core';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { FavoriteCharactersService } from 'src/app/services/favorite-characters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  favoritosCount$?: Observable<number>;
  faHeart = faHeart;

  constructor(private favoriteCharacterService: FavoriteCharactersService) { }

  ngOnInit(): void {
    this.favoritosCount$ = this.favoriteCharacterService.favoritosCount$;
  }
}
