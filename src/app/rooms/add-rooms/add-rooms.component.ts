import { RoomsService } from './../services/rooms.service';
import { Component } from '@angular/core';
import { RoomList } from '../rooms.interface';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss'],
})
export class AddRoomsComponent {
  message!: string;
  room: RoomList = {
    price: 0,
    rating: 0,
    photos: '',
    amenties: '',
    roomType: '',
    roomNumber: 0,
    checkInTime: new Date(),
    checkOutTime: new Date(),
  };

  constructor(private roomsService: RoomsService) {}

  handleRoom() {
    this.roomsService.addRooms(this.room).subscribe((data: RoomList[]) => {
      this.message = 'Room Added Successfully';
    });

    console.log("||= => ", )
  }
}
