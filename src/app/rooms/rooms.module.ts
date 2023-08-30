import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RoomsComponent } from './rooms.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RouteConfigService } from '../services/config/route-config.service';

@NgModule({
  declarations: [
    RoomsComponent,
    AddRoomsComponent,
    RoomsListComponent,
    RoomBookingComponent,
  ],
  exports: [
    RoomsComponent,
    AddRoomsComponent,
    RoomsListComponent,
    RoomBookingComponent,
  ],
  imports: [FormsModule, CommonModule, RoomsRoutingModule],
  providers: [
    {
      useValue: { title: 'Room' },
      provide: RouteConfigService,
    },
  ],
})
export class RoomsModule {}
