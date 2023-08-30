import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { ConfigService } from '../services/config/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private config: ConfigService) {}

  login(): void {
    if (this.email === 'admin@gmail.com' && this.password === 'admin')
      this.router.navigateByUrl('/rooms/add');
    else alert('Login Failed');
  }
}
