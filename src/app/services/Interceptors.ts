import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor{


  constructor(private AuthService: AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const token: string =this.AuthService.getCookie('token')
    const headers=new HttpHeaders({
      token
      // 'testcabecera':"test"
    });

  const reqClone = req.clone({
  headers
  })


    console.log('paso por el interceptor');

    return next.handle(reqClone)
    //throw new Error("Method not implemented.");
  }

}
