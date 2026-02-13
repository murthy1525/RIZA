import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  description: string;
  detailedDescription?: string;
  price: string;
  icon?: string;
  badge?: string;
  rating?: number;
  options?: string[];
}

interface MenuCategory {
  id: string;
  label: string;
  description: string;
  icon?: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="menu-view">
      <h2 class="section-title">{{ selectedCategory?.label }}</h2>
      <p class="section-subtitle" *ngIf="selectedCategory">
        {{ selectedCategory.description }}
      </p>

      <div *ngIf="selectedCategory" class="category-hero">
        <div class="category-image" [ngClass]="'cat-image-' + selectedCategory.id">
          <span *ngIf="selectedCategory.icon" class="category-icon">{{ selectedCategory.icon }}</span>
        </div>
        <div class="category-text">
          <h3>{{ selectedCategory.label }}</h3>
          <p>{{ selectedCategory.description }}</p>
        </div>
      </div>

      <div class="items-grid" *ngIf="selectedCategory">
        <article
          class="menu-card"
          *ngFor="let item of selectedCategory.items"
          (click)="onSelectItem(item)"
          [class.is-selected]="selectedItem === item"
        >
          <div class="menu-card-header">
            <div class="item-main">
              <span *ngIf="item.icon" class="item-icon">{{ item.icon }}</span>
              <h3 class="item-name">{{ item.name }}</h3>
            </div>
            <span class="item-price">{{ item.price }}</span>
          </div>
          <p class="item-description">{{ item.description }}</p>
          <span *ngIf="item.badge" class="item-badge">{{ item.badge }}</span>
        </article>
      </div>

      <div *ngIf="selectedItem" class="item-detail-overlay" (click)="selectedItem = null">
        <div class="selected-item-detail" (click)="$event.stopPropagation()">
          <div class="selected-item-visual">
            <div class="selected-item-image-wrapper">
              <div class="selected-item-image">
                <span *ngIf="selectedItem.icon" class="image-icon">{{ selectedItem.icon }}</span>
              </div>
              <button class="close-detail-btn" (click)="selectedItem = null" title="Close">×</button>
            </div>
            <div class="selected-item-header">
              <div class="selected-item-main">
                <span *ngIf="selectedItem.icon" class="selected-item-icon">{{ selectedItem.icon }}</span>
                <div class="selected-item-title-group">
                  <h3 class="selected-item-name">{{ selectedItem.name }}</h3>
                  <div *ngIf="selectedItem.rating" class="selected-item-rating">
                    <span class="rating-stars">{{ getRatingStars(selectedItem.rating) }}</span>
                    <span class="rating-value">{{ selectedItem.rating }}</span>
                  </div>
                </div>
              </div>
              <span class="selected-item-price">{{ selectedItem.price }}</span>
            </div>
          </div>

          <div class="selected-item-content">
            <p class="selected-item-description">
              {{ selectedItem.description }}
            </p>
            <p *ngIf="selectedItem.detailedDescription" class="selected-item-detailed">
              {{ selectedItem.detailedDescription }}
            </p>
            <span *ngIf="selectedItem.badge" class="selected-item-badge">{{ selectedItem.badge }}</span>
            
            <div *ngIf="selectedItem.options && selectedItem.options.length > 0" class="selected-item-options">
              <h4 class="options-title">Available Options:</h4>
              <ul class="options-list">
                <li *ngFor="let option of selectedItem.options" class="option-item">
                  <span class="option-bullet">•</span>
                  <span class="option-text">{{ option }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MenuComponent {
  @Input() categories: MenuCategory[] = [];
  @Input() selectedCategoryId: string = '';
  @Input() selectedItem: MenuItem | null = null;
  @Input() selectItem!: (item: MenuItem) => void;

  get selectedCategory(): MenuCategory | undefined {
    return this.categories.find(c => c.id === this.selectedCategoryId);
  }

  onSelectItem(item: MenuItem): void {
    if (this.selectItem) {
      this.selectItem(item);
    }
  }

  getRatingStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalfStar) {
      stars += '⭐';
    }
    return stars;
  }
}

