import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { LoginService } from './services/login.service';
import { ConfigService } from '../services/config/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private config: ConfigService,
    private loginService: LoginService
  ) {
    console.log('Login Component');
  }

  login(): void {
    if (this.loginService.login(this.email, this.password))
      this.router.navigateByUrl('/rooms');
    else this.router.navigateByUrl('/login');
  }
}
