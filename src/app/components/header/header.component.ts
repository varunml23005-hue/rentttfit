import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // ROUTER
  constructor(private router: Router) {}

  // LOCATION
  locationDropdownOpen = false;
  selectedLocation = 'Location';
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleLocationDropdown(): void {
    this.locationDropdownOpen = !this.locationDropdownOpen;
  }

  selectLocation(location: string): void {
    this.selectedLocation = location;
    console.log('Selected location:', location);
    this.locationDropdownOpen = false;
  }

  // SEARCH
  searchText: string = '';

  search(): void {
    if (!this.searchText.trim()) {
      return;
    }
    console.log('Searching for:', this.searchText);
  }

  // HOME
  goHome(): void {
    this.router.navigate(['/']);
  }

  // HEADER ACTIONS
  handleAction(action: string): void {
    console.log(action + ' clicked');
    if (action === 'Become a Seller' || action === 'Sign in / Register' || action === 'Dashboard') {
      this.router.navigate(['/dashboard']);
    } else if (action === 'Wishlist') {
      this.router.navigate(['/dashboard/wishlist']);
    }
  }

  // MESSAGE
  goToMessages(): void {
    this.router.navigate(['/messages']);
  }

  // NAVIGATION
  navigate(section: string): void {
    console.log(section + ' clicked');
    if (section === 'Women' || section === 'Men' || section === 'Kids' || section === 'Jewellery' || section === 'Brands' || section === 'Occasions' || section === 'New Arrivals') {
      this.router.navigate(['/catalogue']);
    }
  }

}