import { InjectionToken } from '@angular/core';
import { AppConfigInterface } from './app-config.interface';
import { environment } from 'src/environments/environment.prod';

export const AppConfig: AppConfigInterface = {
  apiEndPoint: environment.apiEndPoint,
};

export const AppConfigService = new InjectionToken<AppConfigInterface>(
  'app-config.service'
);
