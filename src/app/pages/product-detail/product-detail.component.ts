import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PRODUCTS, Product } from '../../products.data';

interface ChatMessage {
  from: 'me' | 'owner';
  text: string;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() id = '';

  product: Product | undefined;
  selectedSize = '';
  selectedImage = signal('');
  wishlisted = signal(false);

  chatOpen = signal(false);
  messages = signal<ChatMessage[]>([]);
  draft = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loadProduct(params['id'] ?? this.id);
    });
  }

  private loadProduct(id: string) {
    this.product = PRODUCTS.find((p) => p.id === id);
    this.selectedSize = '';
    this.selectedImage.set('');
    this.wishlisted.set(false);
    this.chatOpen.set(false);
    this.messages.set([]);
    this.draft = '';

    if (this.product) {
      this.selectedSize = this.product.sizes[0];
      this.selectedImage.set(this.product.images[0] ?? this.product.image);
      this.messages.set([
        {
          from: 'owner',
          text: `Hi! Thanks for your interest in "${this.product.title}". Feel free to ask me anything about size, condition, or availability.`,
        },
      ]);
    }
  }

  selectImage(image: string) {
    this.selectedImage.set(image);
  }

  toggleWishlist() {
    this.wishlisted.update((value) => !value);
  }

  whatsappLink(): string {
    if (!this.product) return '#';
    const text = encodeURIComponent(
      `Hi ${this.product.owner.name}, I'm interested in renting your "${this.product.title}" (Size ${this.selectedSize}) listed on RentFits. Is it available?`
    );
    return `https://wa.me/${this.product.owner.whatsapp}?text=${text}`;
  }

  toggleChat() {
    this.chatOpen.set(!this.chatOpen());
  }

  sendMessage() {
    if (!this.draft.trim()) return;
    this.messages.set([...this.messages(), { from: 'me', text: this.draft }]);
    this.draft = '';

    // Demo-only: this chat is local to your browser and isn't connected to a
    // real backend or the owner's device. Simulates a reply so the flow
    // feels complete; wire this up to a real messaging service later.
    setTimeout(() => {
      this.messages.set([
        ...this.messages(),
        { from: 'owner', text: "Thanks for the message! I'll get back to you shortly." },
      ]);
    }, 900);
  }
}
