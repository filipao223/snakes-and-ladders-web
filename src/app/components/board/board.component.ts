import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { GameControllerService } from 'src/app/services/gameController/game-controller.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  playerList: Player[];

  constructor(private gameControllerService: GameControllerService) {
    this.playerList = gameControllerService.getPlayers();
  }
}
