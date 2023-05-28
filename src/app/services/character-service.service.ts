import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class CharacterServiceService {
  
  private readonly API_URL = "https://ih-crud-api.herokuapp.com"

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character>{
    return this.http.get<Character>(`${this.API_URL}/characters`);
  }

  addNewCaracter(character: Character): Observable<Character>{
    const body = character;
    return this.http.post<Character>(`${this.API_URL}/characters`, body);
  }

  updateCharacter(character: Character): Observable<void>{
    const body = character;
    return this.http.put<void>(`${this.API_URL}/characters/${body}`, body)
  }

  deleteCharacter(id: number): Observable<void>{
    return this.http.delete<any>(`${this.API_URL}/characters/${id}`)
  }
}
