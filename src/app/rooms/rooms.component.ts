import {
  ChangeDetectorRef,
  AfterViewInit,
  ViewChildren,
  ViewChild,
  Component,
  QueryList,
  OnDestroy,
  SkipSelf,
  DoCheck,
  OnInit,
  Self,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscriber, map } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { Room, RoomList } from './rooms.interface';
import { RoomsService } from './services/rooms.service';
import { HeaderComponent } from '../header/header.component';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  totalBytes: number = 0;
  noOfRooms: number = 10;
  selectedRoom!: RoomList;
  hideRooms: boolean = true;
  roomsList: RoomList[] = [];
  title: string = 'Room List';
  hotelName: string = 'Hilton Hotel';
  // roomsCount$: Observable<number>;

  rooms$: Observable<RoomList[]> = this.roomsService.getRooms$;
  // roomsCount$ = this.rooms$.pipe(map((data: RoomList[]) => data.length));

  room: Room = {
    totalRooms: 20,
    bookedRooms: 5,
    availableRooms: 10,
  };

  // @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  // @ViewChildren(HeaderComponent)
  // headerComponentChildren!: QueryList<HeaderComponent>;

  // stream = new Observable<number>((observe: Subscriber<number>) => {
  //   observe.next(1);
  //   observe.next(2);
  //   observe.next(3);

  //   observe.complete();
  // });

  constructor(
    private cd: ChangeDetectorRef,
    @SkipSelf() private roomsService: RoomsService
  ) {
    console.log('Inside -> RoomsComponent -> Constructor');
    // console.log('Inside ', this.roomsService.getRooms$);
    // this.roomsList = this.roomsService.getRooms();
  }

  ngOnInit(): void {
    console.log('Inside -> RoomsComponent -> OnInit');
    console.log('OnInit is called');

    // this.roomsService.data$.subscribe((data) => {
    //   console.log('DATA$ ', data?.body);
    // });

    // this.roomsService.data$.subscribe((data) => {
    //   console.log('Inside -> RoomsComponent -> getRooms$.subscribe');
    //   this.rooms$ = data?.body;

    //   console.log('| Event (updated)| ', this.rooms$);
    // });

    // this.roomsService.getRooms$.subscribe((data) => {
    //   console.log('Inside -> RoomsComponent -> getRooms$.subscribe');
    //   this.rooms$ = data;

    //   console.log('| Event (updated)| ', this.rooms$);
    // });

    // this.roomsService.getPhotos().subscribe((event: HttpEvent<unknown>) => {
    //   console.log(event);

    //   switch (event.type) {
    //     case HttpEventType.Sent: {
    //       console.log('\n| Request Has Been Sent');
    //       break;
    //     }
    //     case HttpEventType.ResponseHeader: {
    //       console.log('\n| Request Success');
    //       break;
    //     }
    //     case HttpEventType.DownloadProgress: {
    //       this.totalBytes += event.loaded;
    //       console.log('\n| Downloading Progress', this.totalBytes);
    //       break;
    //     }
    //     case HttpEventType.Response: {
    //       console.log('\n| Response Body', event.body);
    //       break;
    //     }
    //   }
    // });

    // this.stream.subscribe((data: number) => {
    //   console.log('Stream Observeable | ', data);
    // });

    // this.stream.subscribe({
    //   next: (data: number) => {
    //     console.log('Stream Observeable (next) | ', data);
    //   },
    //   complete: () => {},
    //   error: () => {},
    // });

    // this.roomsService
    //   .getRooms()
    //   .subscribe((room: RoomList[]) => (this.roomsList = room));

    // this.roomsService.getRooms$.subscribe(
    //   (room: RoomList[]) => (this.roomsList = room)
    // );
  }

  // ngDoCheck(): void {
  //   console.log('DoCheck is called');
  // }

  ngAfterViewInit(): void {
    console.log('Inside -> RoomsComponent -> AfterViewInit');
    // console.log('AfterViewInit is called');
    // console.log(
    //   'headerComponent -> Inside RoomComponent',
    //   this.headerComponent
    // );
    // console.log(
    //   'headerComponentChildren -> Inside RoomComponent',
    //   this.headerComponentChildren
    // );

    // this.headerComponent.title = 'Title -> Room View';
    this.cd.detectChanges();
  }

  onToggle(): void {
    this.hideRooms = !this.hideRooms;
    this.title = 'Room List (Updated)';

    if (this.room.availableRooms! > 5) this.room.availableRooms = 3;
    else this.room.availableRooms = 10;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      price: 3500,
      photos: 'https://unsplash.com/photos/WgkA3CSFrjc',
      rating: 1,
      roomType: 'DeluxXXXX',
      amenties: 'Wifi4, TV4, Sex4',
      checkInTime: new Date('05-04-2023'),
      checkOutTime: new Date('05-14-2023'),
      roomNumber: 4,
    };

    // this.roomsList.push(newRoom);
    // this.roomsList = [...this.roomsList, newRoom];

    this.roomsService
      .addRooms(room)
      .subscribe((data: RoomList[]) => (this.roomsList = data));
  }

  editRoom() {
    const room: RoomList = {
      price: 3500,
      photos: 'https://unsplash.com/photos/WgkA3CSFrjc',
      rating: 1,
      roomType: 'DeluxXXXX (update)',
      amenties: 'Wifi4, TV4, Sex4',
      checkInTime: new Date('05-04-2023'),
      checkOutTime: new Date('05-14-2023'),
      roomNumber: 2,
    };

    this.roomsService
      .editRooms(room)
      .subscribe((data: RoomList[]) => (this.roomsList = data));
  }

  deleteRoom() {
    const room: RoomList = {
      price: 3500,
      photos: 'https://unsplash.com/photos/WgkA3CSFrjc',
      rating: 1,
      roomType: 'DeluxXXXX (update)',
      amenties: 'Wifi4, TV4, Sex4',
      checkInTime: new Date('05-04-2023'),
      checkOutTime: new Date('05-14-2023'),
      roomNumber: 2,
    };

    this.roomsService
      .deleteRooms(room.roomNumber)
      .subscribe((data: RoomList[]) => (this.roomsList = data));
  }
}
