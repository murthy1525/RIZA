import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly CORRECT_MOBILE = '8074713306';
  private isAuthenticated = false;

  login(mobileNumber: string): boolean {
    if (mobileNumber === this.CORRECT_MOBILE) {
      this.isAuthenticated = true;
      // Store in sessionStorage to persist across page refreshes - only in browser
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.setItem('authenticated', 'true');
      }
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem('authenticated');
    }
  }

  isLoggedIn(): boolean {
    // Check sessionStorage first (for page refreshes) - only in browser
    if (typeof window !== 'undefined' && window.sessionStorage) {
      if (sessionStorage.getItem('authenticated') === 'true') {
        this.isAuthenticated = true;
      }
    }
    return this.isAuthenticated;
  }
}
