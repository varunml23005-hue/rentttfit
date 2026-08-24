import {
  Component,
  Input
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PickerComponent } from '@ctrl/ngx-emoji-mart';

import {
  Chat,
  Message,
  ChatOption
} from '../../models/chat.model';

import { ChatBotService } from '../../services/chat-bot.service';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-message-input',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    PickerComponent
  ],

  templateUrl: './message-input.component.html',

  styleUrl: './message-input.component.css'
})


export class MessageInputComponent {

  @Input() chat!: Chat;

  newMessage = '';

  showEmojiPicker = false;


  constructor(
    private chatBotService: ChatBotService,
    private chatService: ChatService,
    private router: Router
  ) {}


  // =========================================
  // EMOJI PICKER
  // =========================================

  toggleEmojiPicker(): void {

    this.showEmojiPicker =
      !this.showEmojiPicker;

  }


  addEmoji(event: any): void {

    const emoji =
      event.emoji?.native;

    if (emoji) {

      this.newMessage += emoji;

    }

  }


  // =========================================
  // SEND MESSAGE
  // =========================================

  sendMessage(): void {

    if (
      !this.newMessage ||
      this.newMessage.trim() === ''
    ) {
      return;
    }


    const text =
      this.newMessage.trim();


    const message =
      this.addUserMessage(text);


    this.newMessage = '';

    this.showEmojiPicker = false;


    this.scrollToBottom();


    this.getBotResponse(
      text,
      message
    );

  }


  // =========================================
  // QUICK REPLY
  // =========================================

  selectOption(
    option: ChatOption
  ): void {

    if (!option) {
      return;
    }


    // =========================================
    // OUTFIT CATEGORY NAVIGATION
    // =========================================

    const category = this.getCatalogueCategory(
      option.label
    );


    if (category) {

      // Add the selected option as user's message
      this.addUserMessage(option.label);

      // Go to catalogue with selected category
      this.router.navigate(
        ['/catalogue'],
        {
          queryParams: {
            category: category
          }
        }
      );

      return;
    }


    // =========================================
    // NORMAL CHAT OPTIONS
    // =========================================

    const message =
      this.addUserMessage(
        option.label
      );


    this.scrollToBottom();


    this.getBotResponse(
      option.value,
      message
    );

  }


  // =========================================
  // CATALOGUE CATEGORY
  // =========================================

  private getCatalogueCategory(
    label: string
  ): string | null {

    const value =
      label
        .toLowerCase()
        .trim();


    if (value === 'lehenga') {
      return 'Lehenga';
    }


    if (value === 'saree') {
      return 'Saree';
    }


    if (value === 'suit') {
      return 'Suit';
    }


    if (
      value === 'dress / gown' ||
      value === 'dress/gown' ||
      value === 'gown'
    ) {
      return 'Dress/Gown';
    }


    return null;

  }


  // =========================================
  // ADD USER MESSAGE
  // =========================================

  private addUserMessage(
    text: string
  ): Message {

    const message: Message = {

      id: this.getNextMessageId(),

      sender: 'user',

      text: text,

      delivered: false,

      read: false,

      time: this.getCurrentTime()

    };


    this.chat.messages.push(message);


    this.chatService.moveChatToTop(
      this.chat
    );


    setTimeout(() => {

      message.delivered = true;


      this.chatService.updateChatStorage(
        this.chat
      );


      this.scrollToBottom();

    }, 500);


    return message;

  }


  // =========================================
  // BOT RESPONSE
  // =========================================

  private getBotResponse(
    userMessage: string,
    userMessageObject: Message
  ): void {

    setTimeout(() => {

      userMessageObject.delivered = true;

      userMessageObject.read = true;


      this.chatService.updateChatStorage(
        this.chat
      );


      this.scrollToBottom();


      setTimeout(() => {

        const typingMessage: Message = {

          id: this.getNextMessageId(),

          sender: 'owner',

          text: '● ● ●',

          typing: true,

          time: ''

        };


        this.chat.messages.push(
          typingMessage
        );


        this.chatService.updateChatStorage(
          this.chat
        );


        this.scrollToBottom();


        setTimeout(() => {

          const response =
            this.chatBotService.getReply(
              userMessage
            );


          typingMessage.text =
            response.text;


          typingMessage.typing =
            false;


          typingMessage.time =
            this.getCurrentTime();


          if (response.options) {

            typingMessage.options =
              response.options;

          }


          this.chatService.updateChatStorage(
            this.chat
          );


          this.scrollToBottom();

        }, 1200);

      }, 400);

    }, 700);

  }


  // =========================================
  // IMAGE UPLOAD
  // =========================================

  onImageSelected(
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;


    if (
      !input.files ||
      input.files.length === 0
    ) {
      return;
    }


    const file =
      input.files[0];


    if (
      !file.type.startsWith('image/')
    ) {

      input.value = '';

      return;

    }


    const reader =
      new FileReader();


    reader.onload = (): void => {

      const imageMessage: Message = {

        id: this.getNextMessageId(),

        sender: 'user',

        image:
          reader.result as string,

        delivered: false,

        read: false,

        time:
          this.getCurrentTime()

      };


      this.chat.messages.push(
        imageMessage
      );


      this.chatService.moveChatToTop(
        this.chat
      );


      input.value = '';


      this.scrollToBottom();


      setTimeout(() => {

        imageMessage.delivered =
          true;


        this.chatService.updateChatStorage(
          this.chat
        );


        this.scrollToBottom();


        setTimeout(() => {

          imageMessage.read =
            true;


          this.chatService.updateChatStorage(
            this.chat
          );


          this.scrollToBottom();


          this.getImageBotResponse(
            imageMessage
          );

        }, 500);

      }, 500);

    };


    reader.readAsDataURL(file);

  }


  // =========================================
  // IMAGE BOT RESPONSE
  // =========================================

  private getImageBotResponse(
    imageMessage: Message
  ): void {

    setTimeout(() => {

      const typingMessage: Message = {

        id: this.getNextMessageId(),

        sender: 'owner',

        text: '● ● ●',

        typing: true,

        time: ''

      };


      this.chat.messages.push(
        typingMessage
      );


      this.chatService.updateChatStorage(
        this.chat
      );


      this.scrollToBottom();


      setTimeout(() => {

        typingMessage.text =
          'Thanks for sharing the image! 💕 I can help you with this outfit.';


        typingMessage.typing =
          false;


        typingMessage.time =
          this.getCurrentTime();


        imageMessage.delivered =
          true;


        imageMessage.read =
          true;


        this.chatService.updateChatStorage(
          this.chat
        );


        this.scrollToBottom();

      }, 1200);

    }, 400);

  }


  // =========================================
  // NEXT MESSAGE ID
  // =========================================

  private getNextMessageId(): number {

    if (
      !this.chat ||
      !this.chat.messages ||
      this.chat.messages.length === 0
    ) {

      return 1;

    }


    return Math.max(
      ...this.chat.messages.map(
        message => message.id
      )
    ) + 1;

  }


  // =========================================
  // CURRENT TIME
  // =========================================

  private getCurrentTime(): string {

    return new Date().toLocaleTimeString(
      [],
      {
        hour: '2-digit',
        minute: '2-digit'
      }
    );

  }


  // =========================================
  // SCROLL TO BOTTOM
  // =========================================

  private scrollToBottom(): void {

    setTimeout(() => {

      const container =
        document.querySelector(
          '.messages'
        ) as HTMLElement | null;


      if (container) {

        container.scrollTop =
          container.scrollHeight;

      }

    });

  }

}