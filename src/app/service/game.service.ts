import { Game } from './../model/game.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  baseUrl:string='http://localhost:3000/games';
  
  getGames()
  {
   return this.http.get<Game[]>(this.baseUrl);

}
}



 
