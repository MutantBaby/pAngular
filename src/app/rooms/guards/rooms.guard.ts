import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';

export const roomsGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};

@Injectable()
export class RoomsGuard implements CanActivateChild {
  constructor(private route: Router, private loginService: LoginService) {
    console.log('Login Guard');
  }

  canActivateChild(
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
}
