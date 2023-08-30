import { RoomsService } from '../rooms/services/rooms.service';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';

@Injectable()
export class AppHttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private roomsService: RoomsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('Inside -> AppHttpInterceptorInterceptor -> intercept');

    const newRequest: HttpRequest<unknown> = request.clone({
      headers: new HttpHeaders({ token: 'imTheGreatToken' }),
    });

    return next
      .handle(newRequest)
      .pipe
      // map((event: HttpEvent<any>) => {
      //   debugger
      //   if (event instanceof HttpResponse) {
      //     console.log('Inside -> AppHttpInterceptorInterceptor -> next.handle');
      //     const filteredData = event.body.filter(
      //       (data: any) => data?.price > 800
      //     );

      //     const newEvent = event.clone({ body: filteredData });
      //     console.log('| Event | ', newEvent);

      //     this.roomsService.updateData(newEvent);

      //     return newEvent;
      //   }

      //   return event;
      // })
      ();
  }
}
