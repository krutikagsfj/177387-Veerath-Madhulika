import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../model/game.model';



@Component({
  selector: 'app-game-city',
  templateUrl: './game-city.component.html',
  styleUrls: ['./game-city.component.css']
})
export class GameCityComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,  private router: Router,private gameService: GameService) { }
  addForm: FormGroup;
  games :Game[];
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      game_name: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(5)]],
      amount: ['', [Validators.required, Validators.maxLength(4)]]
    })
  }

  onSubmit() {

    console.log('Game details sent to server!');
    // this.gameService.createGamer(this.addForm.value)
    //   .subscribe(data  =>  {
    //     console.log("Data Saved!");
        this.router.navigate(['play-game']);
      // },
        // error  =>  {
        //   console.log("Error occured "  +  error);
        //   alert(error);
        // });

}
}
