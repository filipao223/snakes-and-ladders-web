import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Player } from 'src/app/model/player';

@Injectable({
  providedIn: 'root'
})
export class GameControllerService {

  private backendUrl = 'http://localhost:8080/game';
  private currentPlayer: number = 0;
  private playerList: Player[];

  constructor(private http: HttpClient) {
    this.playerList = [
      { playerName: "Player1", position: 1, color: "red"},
      { playerName: "Player2", position: 1, color: "blue"},
      { playerName: "Player3", position: 1, color: "yellow"},
      { playerName: "Player4", position: 1, color: "green"}
    ];
   }

  getPlayers(): Player[] {
    return this.playerList;
  }

  getCurrentPlayer(): string {
    return this.playerList[this.currentPlayer].playerName;
  }

  getNextPlayer(): string {
    var oldCurrentPlayer = this.currentPlayer;
    this.currentPlayer = (oldCurrentPlayer+1) % 4
    return this.playerList[oldCurrentPlayer].playerName;
  }

  resetGame() {
    this.http.post<any>(this.backendUrl + '/reset', this.playerList).toPromise().then(response => 
      {
        console.log(response);
        this.playerList.forEach(player => {player.position = response['playerPositions'][player.playerName]})
      }
    );
  }

  playerMove(playerName: String): string {
    console.log(this.backendUrl + '/move/' + playerName)
    this.http.post<any>(this.backendUrl + '/move/' + playerName, {}).toPromise().then(response => 
      {
        console.log(response);
        this.playerList.forEach(player => {player.position = response['playerPositions'][player.playerName]})
      });
    return this.getNextPlayer()
  }
}
