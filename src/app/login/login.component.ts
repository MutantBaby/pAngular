import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.email === 'admin@gmail.com' && this.password === 'admin')
      this.router.navigateByUrl('/rooms/add');
    else alert('Login Failed');
  }
}
