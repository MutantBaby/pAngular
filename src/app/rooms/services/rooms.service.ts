import {
  ChangeDetectorRef,
  Injectable,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, shareReplay } from 'rxjs';

import { RoomList } from '../rooms.interface';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService implements OnInit, AfterViewInit {
  #roomsList: RoomList[] = [];

  getRooms$ = this.http.get<RoomList[]>('/api/rooms');

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    console.log('Inside -> RoomsService -> Constructor');
    // console.log('Env Production | ', environment);
    // console.log('Rooms Services Initialized');
    // this.#roomsList = this.getRooms();
  }

  updateData(newData: any) {
    this.dataSubject.next(newData);
  }

  ngOnInit(): void {
    console.log('Inside -> RoomsService -> OnInit');
  }

  ngAfterViewInit(): void {
    console.log('Inside -> RoomsService -> AfterViewInit');
  }

  // getRooms(): Observable<RoomList[]> {
  //   return this.http.get<RoomList[]>('/api/rooms');
  // }

  addRooms(room: RoomList): Observable<RoomList[]> {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRooms(room: RoomList): Observable<RoomList[]> {
    return this.http.put<RoomList[]>(`/api/rooms/:${room.roomNumber}`, room);
  }

  deleteRooms(roomNumber: number): Observable<RoomList[]> {
    return this.http.delete<RoomList[]>(`/api/rooms/:${roomNumber}`);
  }

  getPhotos(): Observable<HttpEvent<unknown>> {
    const request: HttpRequest<unknown> = new HttpRequest(
      'GET',
      'http://jsonplaceholder.typicode.com/photos',
      { reportProgress: true }
    );

    return this.http.request(request);
  }
}
