import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements AfterViewInit {
  @ViewChild('backgroundVideo') videoElement!: ElementRef<HTMLVideoElement>;
  
  mobileNumber: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  videoError: boolean = false;

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    // Only run in browser (not during SSR)
    if (typeof window !== 'undefined' && this.videoElement?.nativeElement) {
      const video = this.videoElement.nativeElement;
      video.playbackRate = 0.7;
      
      // Force play the video
      video.play().catch(err => {
        console.error('Error playing video:', err);
      });
    }
  }

  onVideoError(): void {
    console.error('Video failed to load. Please ensure the video file is at: src/assets/videos/rizabackground.mp4');
    this.videoError = true;
  }

  onVideoLoaded(): void {
    console.log('Video loaded successfully');
    this.videoError = false;
    
    // Set playback rate when video loads (only in browser)
    if (typeof window !== 'undefined' && this.videoElement?.nativeElement) {
      const video = this.videoElement.nativeElement;
      video.playbackRate = 0.7;
      video.play().catch(err => {
        console.error('Error playing video:', err);
      });
    }
  }

  onVideoCanPlay(): void {
    // Ensure video plays at 0.7x speed when it can play (only in browser)
    if (typeof window !== 'undefined' && this.videoElement?.nativeElement) {
      const video = this.videoElement.nativeElement;
      video.playbackRate = 0.7;
      video.play().catch(err => {
        console.error('Error playing video:', err);
      });
    }
  }

  onSubmit(): void {
    this.errorMessage = '';
    
    if (!this.mobileNumber.trim()) {
      this.errorMessage = 'Please enter your mobile number';
      return;
    }

    // Remove any spaces or dashes
    const cleanNumber = this.mobileNumber.replace(/\s|-/g, '');

    this.isLoading = true;
    
    // Simulate a 1 second delay for validation
    setTimeout(() => {
      if (this.authService.login(cleanNumber)) {
        this.router.navigate(['/restaurant']);
      } else {
        this.errorMessage = 'Your mobile number is invalid. Please try again.';
        this.mobileNumber = '';
      }
      this.isLoading = false;
    }, 1000);
  }
}
