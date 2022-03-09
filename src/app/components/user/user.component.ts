import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {


  constructor(private _api:ApiService, private CookieService: CookieService,private AuthService:AuthService)
  {

  }

  isLogged: boolean = false

  login():any {
    const name = (document.querySelector('#user')as HTMLInputElement).value
    const password = (document.querySelector('#password')as HTMLInputElement).value

    this._api.login(name,password)
    .subscribe
    // ( next:({data})=>{this.CookieService.set('token',data)  })
    (response=>{this.CookieService.set('token',response.token)
    })
  }
  decodetest(){
    this.AuthService.DecodeToken()
  }

}


