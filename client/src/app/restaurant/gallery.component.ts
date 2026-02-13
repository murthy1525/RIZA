import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-view">
      <h2 class="section-title">Gallery</h2>
      <p>
        A glimpse into the world of RIZA – from sizzling grills and colorful platters to our warm,
        candle-lit interiors. (You can later replace this text section with real photos.)
      </p>
    </section>
  `
})
export class GalleryComponent {}

