import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent {

  @Input() chat!: Chat;

}