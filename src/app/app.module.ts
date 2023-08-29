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
import { BookingModule } from './booking/booking.module';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HoverDirective } from './directives/hover/hover.directive';
import { ContainerComponent } from './container/container.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppInitializerService } from './appInitializer/app-initializer.service';
import { EmailValidatorDirective } from './directives/emailValidator/email-validator.directive';
import { AppHttpInterceptorInterceptor } from './appHttpInterceptor/app-http-interceptor.interceptor';

function AppInitializerFactory(
  appInitializerService: AppInitializerService
): () => Observable<Object> {
  return () => appInitializerService.init();
}
@NgModule({
  declarations: [
    // Components
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    NotFoundComponent,
    ContainerComponent,
    AppNavbarComponent,

    // Directives
    HoverDirective,
    EmailValidatorDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
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
      deps: [AppInitializerService],
      useFactory: AppInitializerFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
