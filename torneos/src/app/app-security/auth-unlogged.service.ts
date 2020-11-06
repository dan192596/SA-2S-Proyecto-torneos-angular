import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardUnloggedService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let logged = sessionStorage.getItem('logged');
    if (logged!=null && logged == '1') {
      this.router.navigateByUrl('/dashboard');
      return false;
    } else {
      return true;
    }
  }

}