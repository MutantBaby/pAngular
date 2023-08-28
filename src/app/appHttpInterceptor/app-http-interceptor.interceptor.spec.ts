import { TestBed } from '@angular/core/testing';

import { AppHttpInterceptorInterceptor } from './app-http-interceptor.interceptor';

describe('InterceptorsInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AppHttpInterceptorInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AppHttpInterceptorInterceptor = TestBed.inject(
      AppHttpInterceptorInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
