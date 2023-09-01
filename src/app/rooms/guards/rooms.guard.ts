import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChildFn,
  CanActivateChild,
  UrlTree,
  Router,
} from '@angular/router';

import { LoginService } from 'src/app/login/services/login.service';

@Injectable()
export class RoomsGuard implements CanActivateChild {
  constructor(private route: Router, private loginService: LoginService) {
    console.log('Room Guard');
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.loginService.isAdmin;
  }
}
