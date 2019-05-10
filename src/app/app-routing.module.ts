import { PlayGameComponent } from './play-game/play-game.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { GameCityComponent } from './game-city/game-city.component';

export const routes: Routes=[
   { path:'',component: GameCityComponent,pathMatch:'full'},
   { path:'play-game',component: PlayGameComponent}
 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports:[RouterModule],
  
  declarations: []
})
export class AppRoutingModule { }
