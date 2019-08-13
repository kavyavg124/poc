import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/';
import { from } from 'rxjs';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messageType;
  messages;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageType = this.messageService.messages.type;
    this.messages = this.messageService.messages.message;
  }
  clear() {
    this.messageService.clear();
  }

}
