import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home-view">
      <div class="hero">
        <h2 class="hero-title">Welcome to RIZA</h2>
        <p class="hero-subtitle">
          Experience culinary excellence where every dish tells a story.
        </p>
      </div>

      <div class="feature-row">
        <div class="feature-card">
          <div class="feature-icon">🍽️</div>
          <h3>Fine Dining</h3>
          <p>Exquisite cuisine crafted by master chefs.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌿</div>
          <h3>Fresh Ingredients</h3>
          <p>Locally sourced, seasonal produce.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">✨</div>
          <h3>Ambiance</h3>
          <p>Cozy lighting and music for every mood.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👨‍🍳</div>
          <h3>Expert Chefs</h3>
          <p>Passionate chefs bringing years of culinary experience to your plate.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⏱️</div>
          <h3>Quick Service</h3>
          <p>Thoughtfully planned kitchen flow ensures minimal waiting time.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏡</div>
          <h3>Family Friendly</h3>
          <p>A welcoming space for family gatherings, kids and celebrations.</p>
        </div>
      </div>

      <section class="home-description">
        <div class="home-description-block">
          <h3>Crafted Menus</h3>
          <p>
            From timeless classics to seasonal specials, every dish at RIZA is designed to balance
            flavour, presentation and comfort. Our chefs carefully curate menus that work for
            family dinners, celebrations and business meetups alike.
          </p>
        </div>
        <div class="home-description-block">
          <h3>Warm Hospitality</h3>
          <p>
            Our team believes that great food tastes better with genuine smiles. Expect attentive,
            friendly service, quick assistance and thoughtful recommendations every time you dine
            with us.
          </p>
        </div>
        <div class="home-description-block">
          <h3>Perfect Evenings</h3>
          <p>
            Soft lighting, curated music and a cozy interior come together to make every visit
            feel special. Whether it's a quiet dinner for two or a lively family get‑together,
            RIZA sets the right mood.
          </p>
        </div>
      </section>
    </section>
  `
})
export class HomeComponent {}

