import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  CanActivate,
  UrlSegment,
  CanLoad,
  UrlTree,
  Router,
  Route,
  CanMatch,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable()
export class LoginGuard implements CanActivate, CanLoad, CanMatch {
  constructor(private route: Router, private loginService: LoginService) {
    console.log('Login Guard');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.isLoggedIn
      ? true
      : this.route.navigate(['/login']);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isLoggedIn
      ? true
      : this.route.navigate(['/login']);
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
