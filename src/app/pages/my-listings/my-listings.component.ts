import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucidePlus } from '@lucide/angular';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-my-listings',
  standalone: true,
  imports: [CommonModule, RouterModule, LucidePlus],
  templateUrl: './my-listings.component.html',
})
export class MyListingsComponent {
  constructor(public listingService: ListingService) {}
}
