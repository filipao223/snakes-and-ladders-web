import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { GameControllerService } from 'src/app/services/gameController/game-controller.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  playerList: Player[];

  constructor(private gameControllerService: GameControllerService) {
    this.playerList = gameControllerService.getPlayers();
  }
}
