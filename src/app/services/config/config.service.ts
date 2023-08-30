import { Inject, Injectable } from '@angular/core';
import { RouteConfigService } from './route-config.service';
import { RouteConfigInterface } from './route-config.interface';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(
    @Inject(RouteConfigService) private routeConfig: RouteConfigInterface
  ) {
    // console.log('Config Service ^_^');
    // console.log('Route COnfig ^_^', this.routeConfig);
  }
}
