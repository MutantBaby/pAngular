import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService],
})
export class EmployeeComponent {
  text1: string = 'Emp Text1';
  text2: string = 'Emp Text2';

  constructor(@Self() private roomsService: RoomsService) {}
}
