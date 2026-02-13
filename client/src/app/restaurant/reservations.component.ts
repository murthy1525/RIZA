import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-view">
      <h2 class="section-title">Reservations</h2>
      <p>
        Reserve your table in advance to enjoy a seamless dining experience. We offer cozy corners
        for couples, large tables for families, and private sections for special celebrations.
      </p>
      <div class="contact-block">
        <p><strong>Call to Reserve:</strong> 8074713306</p>
        <p><strong>Timings:</strong> 11:00 AM - 10:30 PM (all days)</p>
        <p><strong>Advance Booking:</strong> Recommended for weekends and holidays.</p>
      </div>
    </section>
  `
})
export class ReservationsComponent {}

