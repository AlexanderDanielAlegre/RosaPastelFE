import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User, UserDto } from 'src/app/Common/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  UsuarioDtoform : FormGroup;


 constructor(private fb:FormBuilder, private _api:ApiService )
 {
  this.UsuarioDtoform = this.fb.group({
    Name:[],
    Address:[]
  })
 }

//metodo para llamar al create en el endpoint

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

createUser():any
{
  debugger
  const usuario:UserDto={
    Name :this.UsuarioDtoform.get('Name')?.value,
  }
  usuario.Address = this.UsuarioDtoform.get('Address')?.value

  let userresponse : UserDto

  this._api.createUser(usuario).subscribe(response=>
    {
      debugger
//      userresponse = response
      console.log(response),
      () => console.log('Peticion Realizada')
    })
}

}
