import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  LucideChevronLeft,
  LucideArrowRight,
  LucideUploadCloud,
  LucideCheckCircle2,
  LucideX,
} from '@lucide/angular';
import { ListingService, Listing } from '../../services/listing.service';

@Component({
  selector: 'app-add-new-listing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideChevronLeft,
    LucideArrowRight,
    LucideUploadCloud,
    LucideCheckCircle2,
    LucideX,
  ],
  templateUrl: './add-new-listing.component.html',
})
export class AddNewListingComponent {
  steps = ['Photos', 'Details', 'Pricing', 'Availability', 'Review'];
  currentStep = 0;

  formData = {
    title: '',
    category: '',
    brand: '',
    size: '',
    condition: '',
    description: '',
    rentalPrice: '',
    securityDeposit: '',
    cleaningCharges: '',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80'
  };

  constructor(private listingService: ListingService, private router: Router) {}

  get estimatedEarnings(): number {
    return (Number(this.formData.rentalPrice) || 0) + (Number(this.formData.cleaningCharges) || 0);
  }

  handleNext() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      const newListing: Listing = {
        id: Math.random().toString(36).substr(2, 9),
        title: this.formData.title || 'Untitled Listing',
        price: Number(this.formData.rentalPrice) || 0,
        duration: '3 Days',
        image: this.formData.image,
        bookings: 0,
        status: 'Active',
        category: this.formData.category || 'Category',
        brand: this.formData.brand || 'Brand',
        size: this.formData.size || 'M',
        condition: this.formData.condition || 'Good',
        description: this.formData.description || '',
      };
      this.listingService.addListing(newListing);
      this.router.navigate(['/dashboard/listings']);
    }
  }

  handleBack() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.router.navigate(['/dashboard/listings']);
    }
  }

  isCompleted(index: number): boolean {
    return index < this.currentStep;
  }

  isActive(index: number): boolean {
    return index === this.currentStep;
  }
}
