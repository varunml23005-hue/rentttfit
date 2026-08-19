import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chat, ChatOption } from '../../models/chat.model';

import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { MessageInputComponent } from '../message-input/message-input.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [
    CommonModule,
    ChatHeaderComponent,
    MessageInputComponent
  ],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {

  @Input() chat!: Chat;

  @ViewChild(MessageInputComponent)
  messageInput!: MessageInputComponent;

  // Stores the image currently opened in preview
  selectedImage: string | null = null;


  // =========================================
  // QUICK REPLY OPTION
  // =========================================

  selectChatOption(option: ChatOption): void {

    if (!this.messageInput) {
      return;
    }

    this.messageInput.selectOption(option);
  }


  // =========================================
  // OPEN IMAGE PREVIEW
  // =========================================

  openImage(image: string): void {

    if (!image) {
      return;
    }

    this.selectedImage = image;
  }


  // =========================================
  // CLOSE IMAGE PREVIEW
  // =========================================

  closeImage(): void {

    this.selectedImage = null;
  }

}