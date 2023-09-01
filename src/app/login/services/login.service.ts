import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor() {
    console.log('Login Service');
  }

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin')
      this.isLoggedIn = true;

    return false;
  }
}
