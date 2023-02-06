import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { RollComponent } from './components/roll/roll.component';
import { WinConditionComponent } from './components/win-condition/win-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PlayerListComponent,
    RollComponent,
    WinConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
