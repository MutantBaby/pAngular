import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './rooms.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      { path: 'add', component: AddRoomsComponent },
      { path: ':id', component: RoomBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
