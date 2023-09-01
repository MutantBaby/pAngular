import {
  ChangeDetectorRef,
  ViewContainerRef,
  AfterViewInit,
  ElementRef,
  OnDestroy,
  Component,
  ViewChild,
  Inject,
  OnInit,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import {
  AppConfigService,
  AppConfig,
} from './InjectionTokens/app-config/app-config.service';
import { RoomList } from './rooms/rooms.interface';
import { RoomsService } from './rooms/services/rooms.service';
import { AppInitializerService } from './appInitializer/app-initializer.service';
import { AppConfigInterface } from './InjectionTokens/app-config/app-config.interface';
import { LocalStorageTokenService } from './InjectionTokens/local-storage-token/local-storage-token.service';

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
    private router: Router,
    private cd: ChangeDetectorRef,
    private roomsService: RoomsService,
    private appInitializerService: AppInitializerService,
    @Inject(AppConfigService) private appConfig: AppConfigInterface,
    @Inject(LocalStorageTokenService) private localStorageToken: Storage
  ) {
    // this.router.events.subscribe((e) => {
    //   console.log('| AppComponent -> Constructor -> Router Event', e);
    // });
    // console.log('| AppInitializerService ', appInitializerService);
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
    this.router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe((e) => {
        console.log('Navigation Started');
      });

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        console.log('Navigation Ended');
      });

    // console.log('Inside ->  AppComponent -> OnInit');
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
