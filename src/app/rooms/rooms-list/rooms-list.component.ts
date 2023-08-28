import {
  ChangeDetectionStrategy,
  SimpleChanges,
  EventEmitter,
  Component,
  OnChanges,
  OnDestroy,
  Output,
  Input,
} from '@angular/core';

import { RoomList } from '../rooms.interface';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() title: string = '';
  @Input() rooms: RoomList[] | null = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngOnDestroy(): void {
    // console.log('OnDestroy is called');
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
