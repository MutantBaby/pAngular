import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss'],
})
export class RoomBookingComponent implements OnInit {
  id!: number;
  data!: number;
  queryParamId!: number;
  // id$: Observable<number> = this.router.params.pipe(
  //   map((param: Params) => param['id'])
  // );
  id$: Observable<string | null> = this.router.paramMap.pipe(
    map((param: ParamMap) => param.get('id'))
  );

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.router.params.subscribe((data: Params) => {
    //   console.log('| PARAMS | ', data);
    // });
    // this.id = this.router.snapshot.params['id'];
    // this.data = this.router.snapshot.data['id'];
    // this.queryParamId = this.router.snapshot.queryParams['id'];
    // console.log('||= =>  ', this.id, '\n', this.data, '\n', this.queryParamId);
  }
}
