import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  LucideLayoutDashboard,
  LucideList,
  LucidePlusSquare,
  LucideShoppingBag,
  LucideMessageSquare,
  LucideHeart,
  LucideWallet,
  LucideSettings,
  LucideSearch,
  LucideBell,
  LucideMessageCircle,
} from '@lucide/angular';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideLayoutDashboard,
    LucideList,
    LucidePlusSquare,
    LucideShoppingBag,
    LucideMessageSquare,
    LucideHeart,
    LucideWallet,
    LucideSettings,
    LucideSearch,
    LucideBell,
    LucideMessageCircle,
  ],
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent {
  navItems = [
    { name: 'Dashboard', path: '/dashboard', iconName: 'layout-dashboard' },
    { name: 'My Listings', path: '/dashboard/listings', iconName: 'list' },
    { name: 'Add New Listing', path: '/dashboard/listings/new', iconName: 'plus-square' },
    { name: 'My Orders', path: '/dashboard/orders', iconName: 'shopping-bag' },
    { name: 'Messages', path: '/messages', iconName: 'message-square', badge: 3 },
    { name: 'Wishlist', path: '/dashboard/wishlist', iconName: 'heart' },
    { name: 'Earnings', path: '/dashboard/earnings', iconName: 'wallet' },
    { name: 'Profile Settings', path: '/dashboard/settings', iconName: 'settings' },
  ];

  constructor(public router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }

  isAddListing(path: string): boolean {
    return path === '/dashboard/listings/new';
  }
}
