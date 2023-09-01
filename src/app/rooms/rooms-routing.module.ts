import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './rooms.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomsGuard } from './guards/rooms.guard';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild: [RoomsGuard],
    children: [
      { path: 'add', component: AddRoomsComponent },
      { path: ':id', component: RoomBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RoomsGuard],
})
export class RoomsRoutingModule {}
