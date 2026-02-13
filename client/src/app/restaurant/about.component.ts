import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-view">
      <h2 class="section-title">About RIZA</h2>
      <p>
        RIZA is a cozy neighborhood restaurant where classic recipes meet modern flavours.
        From family dinners to celebrations with friends, we serve experiences that
        linger beyond the last bite.
      </p>
      <div class="contact-block">
        <p><strong>Phone:</strong> 8074713306</p>
        <p><strong>Hours:</strong> Mon-Sun: 11:00 AM - 11:00 PM</p>
        <p><strong>Location:</strong> Your City, Your Street</p>
      </div>

      <div class="social-block">
        <h3 class="social-title">Connect with us</h3>
        <div class="social-cards">
          <div class="social-card">
            <div class="social-card-icon">📸</div>
            <h4 class="social-card-label">Instagram</h4>
            <p class="social-card-value">@riza_restaurant</p>
          </div>
          <div class="social-card">
            <div class="social-card-icon">🐦</div>
            <h4 class="social-card-label">Twitter</h4>
            <p class="social-card-value">@riza_restaurant</p>
          </div>
          <div class="social-card">
            <div class="social-card-icon">📱</div>
            <h4 class="social-card-label">WhatsApp</h4>
            <p class="social-card-value">+91 80747 13306</p>
          </div>
          <div class="social-card">
            <div class="social-card-icon">📍</div>
            <h4 class="social-card-label">Location</h4>
            <p class="social-card-value">123 Foodie Street, Gourmet City, 000000</p>
          </div>
        </div>
      </div>

      <div class="reviews-block">
        <h3 class="reviews-title">Google Reviews</h3>
        <div class="reviews-grid">
          <div class="review-card">
            <div class="review-header">
              <div class="review-rating">⭐⭐⭐⭐⭐</div>
              <div class="review-name">Priya Sharma</div>
            </div>
            <p class="review-text">"Amazing food and excellent service! The biryani was absolutely delicious. Highly recommend this place!"</p>
            <div class="review-date">2 weeks ago</div>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="review-rating">⭐⭐⭐⭐⭐</div>
              <div class="review-name">Rahul Kumar</div>
            </div>
            <p class="review-text">"Best restaurant in town! The ambiance is perfect and the staff is very friendly. Will definitely come back!"</p>
            <div class="review-date">1 month ago</div>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="review-rating">⭐⭐⭐⭐⭐</div>
              <div class="review-name">Anjali Mehta</div>
            </div>
            <p class="review-text">"Loved the Tandoori Paneer Bites! The chef's special dishes are a must-try. Great value for money."</p>
            <div class="review-date">3 weeks ago</div>
          </div>
          <div class="review-card">
            <div class="review-header">
              <div class="review-rating">⭐⭐⭐⭐⭐</div>
              <div class="review-name">Vikram Singh</div>
            </div>
            <p class="review-text">"Perfect place for family dinners. The food quality is consistent and the service is prompt. 5 stars!"</p>
            <div class="review-date">1 week ago</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}

