import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PRODUCTS, Product } from '../../products.data';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  allProducts = PRODUCTS;
  
  // Signals for filters
  searchTerm = signal('');
  selectedCategory = signal('');
  selectedOccasion = signal('');
  selectedCondition = signal('');
  priceRange = signal(5000);
  sortBy = signal('relevance');
  mobileFiltersOpen = signal(false);

  // Computed filtered products
  filteredProducts = computed(() => {
    const search = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();
    const occasion = this.selectedOccasion();
    const condition = this.selectedCondition();
    const maxPrice = this.priceRange();
    const sort = this.sortBy();

    let results = this.allProducts.filter(product => {
      const matchesSearch = !search || 
        product.title.toLowerCase().includes(search) || 
        product.brand.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search);
      
      const matchesCategory = !category || product.category === category;
      const matchesOccasion = !occasion || product.occasion === occasion;
      const matchesCondition = !condition || product.condition === condition;
      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesOccasion && matchesCondition && matchesPrice;
    });

    // Apply sorting
    if (sort === 'price-low') {
      results = results.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      results = results.sort((a, b) => b.price - a.price);
    } else if (sort === 'newest') {
      results = results.reverse();
    }

    return results;
  });

  // Get unique values for filters
  categories = [...new Set(this.allProducts.map(p => p.category))].sort();
  occasions = [...new Set(this.allProducts.map(p => p.occasion))].sort();
  conditions = ['Like New', 'Excellent', 'Good'];

  constructor(private route: ActivatedRoute) {
    // Set category from query params
    this.route.queryParams.subscribe(params => {
      this.selectedCategory.set(params['category'] ?? '');
    });
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set('');
    this.selectedOccasion.set('');
    this.selectedCondition.set('');
    this.priceRange.set(5000);
    this.sortBy.set('relevance');
  }

  toggleMobileFilters(): void {
    this.mobileFiltersOpen.update(val => !val);
  }
}
