import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.urlAuthApi;
  urlRedirectFront = environment.urlProviderPortal;
  loginUrlPath = '/Login';
  logoutUrlPath = '/account/Logout';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(): Observable<any> {
    return this.http.get(
      this.url + this.loginUrlPath + '?returnUrl=' + this.urlRedirectFront
    );
  }

  setCookie(cookieName: string, cookieValue: string): void {
    this.cookieService.set(cookieName, cookieValue);
  }

  getCookie(cookieName: string): string {
    return this.cookieService.get(cookieName);
  }

  checkCookie(cookieName: string): boolean {
    return this.cookieService.check(cookieName);
  }

  deleteAllCookies(cookiePath = '/'): void {
    this.cookieService.deleteAll(cookiePath);
  }

  deleteCookie(cookieName: string, cookiePath = '/'): void {
    this.cookieService.delete(cookieName, cookiePath);
  }

  logOut(): Observable<any> {
    const result = this.http.get(this.url + this.logoutUrlPath + '?postLogoutRedirectUrl=' + this.urlRedirectFront,
      { observe: 'response', withCredentials: true });
    result.subscribe(response => response ? this.deleteAllCookies() : null);
    return result;
  }

  DecodeToken() {
    let token = this.cookieService.get('token');
    let decoded = jwt_decode(token);
    console.log("decodificacion",decoded);
  }

}
