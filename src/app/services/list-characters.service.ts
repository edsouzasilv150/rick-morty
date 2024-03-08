import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../components/models/Lista-Personagens';




@Injectable({
  providedIn: 'root'
})
export class ListCharactersService {
  private apiUrl = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl)
  }
}

