import { InjectionToken } from '@angular/core';

import { RouteConfigInterface } from './route-config.interface';

export const RouteConfig: RouteConfigInterface = {
  title: 'Home',
};

export const RouteConfigService = new InjectionToken<RouteConfigInterface>(
  'route-config'
);

// export
