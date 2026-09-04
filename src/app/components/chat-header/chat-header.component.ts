import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Chat } from '../../models/chat.model';


@Component({
  selector: 'app-chat-header',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './chat-header.component.html',

  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent {

  @Input()
  chat!: Chat;


  /* =========================================
     BACK BUTTON
  ========================================= */

  @Output()
  back = new EventEmitter<void>();


  /* =========================================
     MOBILE MENU
  ========================================= */

  showMenu = false;


  /* =========================================
     GO BACK
  ========================================= */

  goBack(): void {
    this.back.emit();
  }


  /* =========================================
     TOGGLE MENU
  ========================================= */

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }


  /* =========================================
     WHATSAPP
  ========================================= */

  openWhatsApp(): void {

    // Replace with actual customer phone number
    const phoneNumber = '919876543210';

    window.open(
      `https://wa.me/${phoneNumber}`,
      '_blank'
    );

    this.showMenu = false;
  }


  /* =========================================
     CALL
  ========================================= */

  makeCall(): void {

    // Replace with actual customer phone number
    const phoneNumber = '+919876543210';

    window.location.href = `tel:${phoneNumber}`;

    this.showMenu = false;
  }


  /* =========================================
     EMAIL
  ========================================= */

  sendEmail(): void {

    // Replace with actual customer email
    const email = 'customer@example.com';

    window.location.href = `mailto:${email}`;

    this.showMenu = false;
  }

}