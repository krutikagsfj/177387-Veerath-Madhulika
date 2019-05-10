import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes,RouterModule } from '@angular/router';
import { GameCityComponent } from './game-city/game-city.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { PlayGameComponent } from './play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCityComponent,
    PlayGameComponent
  ],
    imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
