import { InjectionToken } from '@angular/core';

export const LocalStorageTokenService = new InjectionToken<Storage>(
  'local-storage-token.service',
  {
    providedIn: 'root',
    factory(): Storage {
      return localStorage;
    },
  }
);
