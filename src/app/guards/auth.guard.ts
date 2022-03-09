import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // if (environment.production) {
      const itHasCookie = this._auth.checkCookie('token');
      if (!itHasCookie) {
        this._auth.login().subscribe((data) => {
          window.location.href = data.url;
        });
      }
      return of(itHasCookie);
    // } else {
      // return of(true);
  // }
  }
}
