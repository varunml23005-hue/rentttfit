import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Chat } from '../../models/chat.model';

import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-sidebar',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './sidebar.component.html',

  styleUrl: './sidebar.component.css'
})


export class SidebarComponent
  implements OnInit, OnDestroy {


  @Input()
  selectedChat: Chat | null = null;


  @Output()
  chatSelected =
    new EventEmitter<Chat>();


  chats: Chat[] = [];

  filteredChats: Chat[] = [];

  searchText = '';

  selectedChatId = 0;


  private chatsSubscription!: Subscription;


  constructor(
    private chatService: ChatService
  ) {}


  // =========================================
  // INITIALIZE
  // =========================================

  ngOnInit(): void {

    this.chats =
      this.chatService.chats;


    this.filteredChats =
      [...this.chats];


    // Set selected ID for desktop styling only
    // DO NOT automatically emit/open first chat
    if (this.chats.length > 0) {

      this.selectedChatId =
        this.chats[0].id;

    }


    // LISTEN FOR CHAT ORDER CHANGES
    this.chatsSubscription =
      this.chatService.chatsChanged.subscribe(
        (chats: Chat[]) => {

          this.chats = chats;

          this.updateFilteredChats();

        }
      );

  }


  // =========================================
  // SELECT CHAT - ONLY WHEN USER CLICKS
  // =========================================

  selectChat(chat: Chat): void {

    this.selectedChatId =
      chat.id;


    // This only happens when user clicks a chat
    this.chatSelected.emit(
      chat
    );

  }


  // =========================================
  // PIN / UNPIN
  // =========================================

  togglePin(
    chat: Chat,
    event: Event
  ): void {

    // Don't open chat
    event.stopPropagation();


    this.chatService.togglePin(
      chat
    );

  }


  // =========================================
  // SEARCH
  // =========================================

  searchChats(): void {

    this.updateFilteredChats();

  }


  // =========================================
  // FILTER
  // =========================================

  private updateFilteredChats(): void {

    const value =
      this.searchText
        .toLowerCase()
        .trim();


    if (!value) {

      this.filteredChats =
        [...this.chats];

      return;

    }


    this.filteredChats =
      this.chats.filter(chat =>

        chat.name
          .toLowerCase()
          .includes(value)

        ||

        chat.shop
          .toLowerCase()
          .includes(value)

        ||

        chat.city
          .toLowerCase()
          .includes(value)

      );

  }


  // =========================================
  // CLEAN UP
  // =========================================

  ngOnDestroy(): void {

    if (this.chatsSubscription) {

      this.chatsSubscription.unsubscribe();

    }

  }

}