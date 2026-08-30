import { Injectable, signal } from '@angular/core';

export type ListingStatus = 'Active' | 'Pending' | 'Draft';

export interface Listing {
  id: string;
  title: string;
  price: number;
  duration: string;
  image: string;
  bookings: number;
  status: ListingStatus;
  category: string;
  brand: string;
  size: string;
  condition: string;
  description: string;
}

const initialListings: Listing[] = [
  {
    id: '1',
    title: 'Pink Embroidered Lehenga',
    price: 499,
    duration: '3 Days',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=200&h=200',
    bookings: 32,
    status: 'Active',
    category: 'Lehenga',
    brand: 'Manish Malhotra',
    size: 'M',
    condition: 'Like New',
    description: 'Beautiful pink embroidered lehenga.',
  },
  {
    id: '2',
    title: 'Polki Necklace Set',
    price: 299,
    duration: '3 Days',
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f70a00d8?auto=format&fit=crop&q=80&w=200&h=200',
    bookings: 28,
    status: 'Active',
    category: 'Jewelry',
    brand: 'Tanishq',
    size: 'One Size',
    condition: 'Excellent',
    description: 'Stunning Polki necklace set.',
  },
  {
    id: '3',
    title: 'Black Georgette Gown',
    price: 449,
    duration: '3 Days',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=200&h=200',
    bookings: 18,
    status: 'Active',
    category: 'Gown',
    brand: 'Sabyasachi',
    size: 'S',
    condition: 'Good',
    description: 'Elegant black gown.',
  }
];

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  public listings = signal<Listing[]>(initialListings);

  addListing(listing: Listing) {
    this.listings.update(prev => [listing, ...prev]);
  }
}
