export interface Room {
  totalRooms?: number;
  bookedRooms?: number;
  availableRooms?: number;
}

export interface RoomList {
  price: number;
  rating: number;
  photos: string;
  roomType: string;
  amenties: string;
  checkInTime: Date;
  checkOutTime: Date;
  roomNumber: number;
}
