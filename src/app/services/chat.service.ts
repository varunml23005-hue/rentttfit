import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Chat, Message } from '../models/chat.model';
import { DUMMY_CHATS } from '../data/dummy-chats';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats: Chat[] = [];

  chatsChanged = new BehaviorSubject<Chat[]>([]);


  constructor() {
    this.loadChats();
  }


  // =========================================
  // LOAD CHATS
  // =========================================

  private loadChats(): void {

    this.chats = DUMMY_CHATS.map(chat => ({
      ...chat,

      pinned: chat.pinned ?? false,

      messages: chat.messages.map(message => ({
        ...message
      }))
    }));

    this.sortChats();

    this.notifyChanges();
  }


  // =========================================
  // NOTIFY SIDEBAR
  // =========================================

  private notifyChanges(): void {

    this.chatsChanged.next([...this.chats]);

  }


  // =========================================
  // MOVE CHAT TO TOP
  // =========================================

  moveChatToTop(chat: Chat): void {

    const index = this.chats.findIndex(
      c => c.id === chat.id
    );

    if (index === -1) {
      return;
    }


    const selectedChat =
      this.chats.splice(index, 1)[0];


    this.chats.unshift(selectedChat);


    this.sortChats();

    this.notifyChanges();

  }


  // =========================================
  // PIN / UNPIN
  // =========================================

  togglePin(chat: Chat): void {

    const foundChat = this.chats.find(
      c => c.id === chat.id
    );

    if (!foundChat) {
      return;
    }


    foundChat.pinned =
      !foundChat.pinned;


    this.sortChats();

    this.notifyChanges();

  }


  // =========================================
  // SORT CHATS
  // =========================================

  private sortChats(): void {

    this.chats.sort((a, b) => {

      if (a.pinned && !b.pinned) {
        return -1;
      }

      if (!a.pinned && b.pinned) {
        return 1;
      }

      return 0;

    });

  }


  // =========================================
  // UPDATE CHAT
  // =========================================

  updateChatStorage(chat: Chat): void {

    const index = this.chats.findIndex(
      c => c.id === chat.id
    );

    if (index === -1) {
      return;
    }


    this.chats[index] = chat;

    this.notifyChanges();

  }


  // =========================================
  // ADD MESSAGE
  // =========================================

  addMessageToStorage(
    chatId: number,
    message: Message
  ): void {

    const chat = this.chats.find(
      c => c.id === chatId
    );

    if (!chat) {
      return;
    }


    chat.messages.push(message);

    this.moveChatToTop(chat);

  }


  // =========================================
  // GET CHAT
  // =========================================

  getChatById(
    id: number
  ): Chat | undefined {

    return this.chats.find(
      chat => chat.id === id
    );

  }


  // =========================================
  // RESET CHATS
  // =========================================

  resetChats(): void {

    this.chats = DUMMY_CHATS.map(chat => ({
      ...chat,

      pinned: chat.pinned ?? false,

      messages: chat.messages.map(message => ({
        ...message
      }))
    }));


    this.sortChats();

    this.notifyChanges();

  }

}