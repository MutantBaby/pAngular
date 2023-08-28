import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContainerComponent } from './container/container.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AddRoomsComponent } from './rooms/add-rooms/add-rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { AppInitializerService } from './appInitializer/app-initializer.service';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { AppHttpInterceptorInterceptor } from './appHttpInterceptor/app-http-interceptor.interceptor';

function AppInitializerFactory(
  appInitializerService: AppInitializerService
): () => Observable<Object> {
  return () => appInitializerService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HeaderComponent,
    EmployeeComponent,
    NotFoundComponent,
    AddRoomsComponent,
    ContainerComponent,
    RoomsListComponent,
    AppNavbarComponent,
    RoomBookingComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorInterceptor,
    },
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: AppInitializerFactory,
      deps: [AppInitializerService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
