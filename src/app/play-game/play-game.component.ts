import { Game } from './../model/game.model';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
 
  games: Game[];
  
 
  constructor(private gameService: GameService, private router: Router) { }
 
  ngOnInit() {
    this.gameService.getGames()
    .subscribe((data: Game[]) => {
    this.games = data;
    
    });
}
}





//  ngOnInit() {

//   this.gameService.getGames().subscribe(data=>{this.games=data});

//   let ammt=localStorage.getItem("amt");

//   this.amount=ammt.toString();

//   this.amount=this.amount-100;

//   console.log(this.amount);

//  }



// }


  

 









