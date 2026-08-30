import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../../components/sidebar/sidebar.component';

import { ChatWindowComponent } from '../../components/chat-window/chat-window.component';

import { Chat } from '../../models/chat.model';

import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-messages',

  standalone: true,

  imports: [
    CommonModule,
    SidebarComponent,
    ChatWindowComponent
  ],

  templateUrl: './messages.component.html',

  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {


  // =========================================
  // SELECTED CHAT
  // =========================================

  selectedChat!: Chat;


  // =========================================
  // MOBILE CHAT STATE
  // =========================================

  isMobileChatOpen = false;


  constructor(
    private chatService: ChatService
  ) {}


  // =========================================
  // INITIALIZE
  // =========================================

  ngOnInit(): void {

    /*
     * Keep a chat available for desktop.
     *
     * On mobile, the chat window will be hidden
     * until the user actually selects a chat.
     */

    this.selectedChat =
      this.chatService.chats[0];

    this.isMobileChatOpen = false;

  }


  // =========================================
  // CHAT SELECTED
  // =========================================

  onChatSelected(chat: Chat): void {

    this.selectedChat = chat;

    this.isMobileChatOpen = true;

  }


  // =========================================
  // BACK TO CHAT LIST
  // =========================================

  backToChatList(): void {

    this.isMobileChatOpen = false;

  }

}