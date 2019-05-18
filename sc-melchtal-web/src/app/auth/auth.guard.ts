import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Page} from '../constants';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuth()) {
      console.log('AuthGuard grantes Access.');
      return true;
    } else {
      console.log('AuthGuard denies Access.');
      console.log(route, state);
      this.router.navigate(['/' + Page.Login]);
    }
  }

}
