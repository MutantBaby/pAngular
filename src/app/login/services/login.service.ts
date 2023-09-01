import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  constructor() {
    console.log('Login Service');
  }

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.isAdmin = true;
      this.isLoggedIn = true;
    } else if (email === 'user@gmail.com' && password === 'user')
      this.isLoggedIn = true;

    return this.isLoggedIn;
  }
}
