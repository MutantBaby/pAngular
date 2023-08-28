import {
  ChangeDetectorRef,
  ViewContainerRef,
  AfterViewInit,
  ElementRef,
  Component,
  ViewChild,
  Inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

import {
  AppConfigService,
  AppConfig,
} from './InjectionTokens/app-config/app-config.service';
import { RoomList } from './rooms/rooms.interface';
import { RoomsService } from './rooms/services/rooms.service';
import { AppConfigInterface } from './InjectionTokens/app-config/app-config.interface';
import { LocalStorageTokenService } from './InjectionTokens/local-storage-token/local-storage-token.service';
import { AppInitializerService } from './appInitializer/app-initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: AppConfigService, useValue: AppConfig }],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  role: string = 'Admin';
  title: string = 'practice';

  // rooms$!: RoomList[] | null;
  // private destroy$: Subject<void> = new Subject<void>();

  // @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild('user', { read: ViewContainerRef }) user!: ViewContainerRef;

  constructor(
    private cd: ChangeDetectorRef,
    // private roomsService: RoomsService,
    private appInitializerService: AppInitializerService,
    @Inject(AppConfigService) private appConfig: AppConfigInterface,
    @Inject(LocalStorageTokenService) private localStorageToken: Storage
  ) {
    console.log('| AppInitializerService ', appInitializerService);
    // console.log('Inside AppComponent Constructor\n'); 
    // console.log('Inside ->  AppComponent -> Constructor');
    // this.roomsService.getRooms$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((rooms: RoomList[]) => {
    //     this.rooms$ = rooms;
    //     console.log(
    //       '| AppComponent -> RoomService -> RoomList | ',
    //       this.rooms$
    //     );
    //   });
    // console.log('AppConfig | ', this.appConfig.apiEndPoint);
    // console.log('LocalStorageToken | ', this.localStorageToken);
    // console.log('| RoomService -> RoomList | ', this.roomsService.getRooms$);
  }

  ngOnInit(): void {
    console.log('Inside ->  AppComponent -> OnInit');
    // this.name.nativeElement.innerText = '✅✅';
    // console.log('LocalStorageToken -> ngOnInit | ', this.localStorageToken);

    this.localStorageToken.setItem('name', 'huhu');
  }

  ngAfterViewInit(): void {
    // const componentRef1 = this.user.createComponent(RoomsComponent);

    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    // Automatically unsubscribe when the component is destroyed
    // this.destroy$.next();
    // this.destroy$.complete();
  }
}
