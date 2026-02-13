import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="offers-view">
      <h2 class="section-title">Today's Offers</h2>
      <ul class="offers-list">
        <li>🔥 Happy Hours: 5 PM - 7 PM, flat 20% off on beverages.</li>
        <li>🍕 Buy 1 Get 1 on Signature Pizzas (Tuesdays only).</li>
        <li>🎂 Complimentary dessert on birthdays and anniversaries.</li>
      </ul>
    </section>
  `
})
export class OffersComponent {}

