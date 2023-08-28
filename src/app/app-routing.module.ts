import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContainerComponent } from './container/container.component';
import { AddRoomsComponent } from './rooms/add-rooms/add-rooms.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms/add', component: AddRoomsComponent },
  { path: 'rooms/:id', component: RoomBookingComponent },
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
