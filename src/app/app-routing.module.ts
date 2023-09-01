import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/loginGuard/login.guard';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((e) => e.RoomsModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((e) => e.BookingModule),
    canActivate: [LoginGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard],
})
export class AppRoutingModule {}
