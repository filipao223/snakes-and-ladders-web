import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { GameControllerService } from 'src/app/services/gameController/game-controller.service';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent {

  playerList: Player[];
  currentPlayer: string;

  constructor(private gameController: GameControllerService) {
    this.playerList = this.gameController.getPlayers();
    this.currentPlayer = this.gameController.getCurrentPlayer();
  }

  resetGame() {
    this.gameController.resetGame();
  }

  playerMove(playerName: string) {
   this.currentPlayer = this.gameController.playerMove(playerName);
  }

}
