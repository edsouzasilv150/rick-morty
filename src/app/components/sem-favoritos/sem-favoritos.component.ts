import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sem-favoritos',
  templateUrl: './sem-favoritos.component.html',
  styleUrls: ['./sem-favoritos.component.css']
})
export class SemFavoritosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltarPaginaInicial() {
    this.router.navigate(['/']);
  }
}
