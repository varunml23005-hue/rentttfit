import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Chat,
  ChatOption
} from '../../models/chat.model';

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


  // =========================================
  // CURRENT CHAT
  // =========================================

  @Input()
  chat!: Chat;


  // =========================================
  // MESSAGE INPUT
  // =========================================

  @ViewChild(MessageInputComponent)
  messageInput!: MessageInputComponent;


  // =========================================
  // BACK EVENT
  // =========================================

  @Output()
  back = new EventEmitter<void>();


  // =========================================
  // IMAGE PREVIEW
  // =========================================

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
  // OPEN IMAGE
  // =========================================

  openImage(image: string): void {

    if (!image) {
      return;
    }

    this.selectedImage = image;

  }


  // =========================================
  // CLOSE IMAGE
  // =========================================

  closeImage(): void {

    this.selectedImage = null;

  }


  // =========================================
  // BACK TO CHAT LIST
  // =========================================

  goBack(): void {

    this.back.emit();

  }

}