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

  selectedChat!: Chat;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.selectedChat = this.chatService.chats[0];
  }

  onChatSelected(chat: Chat): void {
    this.selectedChat = chat;
  }

}