import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-view">
      <h2 class="section-title">Contact Us</h2>
      <p>
        We would love to hear from you – feedback, catering enquiries, corporate events or
        celebrations.
      </p>
      <div class="contact-block">
        <p><strong>Phone:</strong> 8074713306</p>
        <p><strong>Email:</strong> contact@riza-restaurant.com</p>
        <p><strong>Address:</strong> 123 Foodie Street, Gourmet City, 000000</p>
      </div>
    </section>
  `
})
export class ContactComponent {}

