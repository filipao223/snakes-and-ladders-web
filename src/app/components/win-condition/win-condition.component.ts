import { Component } from '@angular/core';

import { MessageService } from 'src/app/services/messageService/message.service';

@Component({
  selector: 'app-win-condition',
  templateUrl: './win-condition.component.html',
  styleUrls: ['./win-condition.component.css']
})
export class WinConditionComponent {

  messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

}
