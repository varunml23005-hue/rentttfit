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
    console.log('RentFits Home');
  }

  // HEADER ACTIONS
  handleAction(action: string): void {
    console.log(action + ' clicked');
  }

  // MESSAGE
  goToMessages(): void {
    this.router.navigate(['/messages']);
  }

  // NAVIGATION
  navigate(section: string): void {
    console.log(section + ' clicked');
  }

}