import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideFileText, LucideShoppingBag, LucideIndianRupee } from '@lucide/angular';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideFileText, LucideShoppingBag, LucideIndianRupee],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  stats = [
    { title: 'Active Listings', value: '24', increase: '+12%', icon: 'file-text', color: 'text-green-500', bg: 'bg-green-50' },
    { title: 'Pending Listings', value: '5', increase: '+2', icon: 'file-text', color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Total Orders', value: '46', increase: '+18%', icon: 'shopping-bag', color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Total Earnings', value: '₹48,320', increase: '+15%', icon: 'indian-rupee', color: 'text-green-600', bg: 'bg-green-100' },
  ];

  recentOrders = [
    { id: 1, user: 'Neha Verma', item: 'Pink Lehenga', price: 499, status: 'Delivered', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100&q=80' },
    { id: 2, user: 'Ananya Singh', item: 'Polki Necklace', price: 299, status: 'Shipped', img: 'https://images.unsplash.com/photo-1599643478524-fb66f70a00d8?w=100&q=80' },
    { id: 3, user: 'Priya Mehta', item: 'Black Gown', price: 449, status: 'Confirmed', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=100&q=80' },
    { id: 4, user: 'Kundan Verma', item: "Men's Sherwani", price: 599, status: 'Pending', img: 'https://images.unsplash.com/photo-1606510344403-516104276709?w=100&q=80' },
  ];

  constructor(public listingService: ListingService) {}

  getStatusColor(status: string) {
    switch (status) {
      case 'Delivered': return 'text-green-600 bg-green-50';
      case 'Shipped': return 'text-blue-600 bg-blue-50';
      case 'Confirmed': return 'text-purple-600 bg-purple-50';
      case 'Pending': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  }
}
