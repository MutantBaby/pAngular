import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  config!: Object;

  constructor(private http: HttpClient) {}

  init(): Observable<Object> {
    return this.http
      .get('../../assets/config.json')
      .pipe(tap((config: Object) => (this.config = config)));
  }
}
