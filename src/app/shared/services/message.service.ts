import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: any = [];
  constructor() { this.messages.message = []; }
  async add(message: any) {
    this.messages = await message;
  }
  clear() {
    this.messages.message = [];
  }
}
