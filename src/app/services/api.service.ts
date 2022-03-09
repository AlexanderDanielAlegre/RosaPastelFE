import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse, TodoDto, User, UserDto } from "../Common/interfaces";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  api_url: string ='http://localhost:3950'
  api_C: string ='http://localhost:61583'

  login(user:string, password: string): Observable<LoginResponse>{
    return this._http.post<LoginResponse>(`${this.api_url}/Login`,{
      name:user,
      password:password
    })
  }

  createUser(usuario: UserDto):Observable<UserDto>
  {
    return this._http.post<UserDto>(`${this.api_C}/User/CreateUser`,
    {
      Name :usuario.Name,
      Address:usuario.Address
    })
  }

  updateUser( usuario: UserDto) : Observable<UserDto>
  {
    return this._http.patch<UserDto>(`${this.api_C}/User/Updateuser`,
    {
      Name: usuario.Name
    },
    {
      params:{
        id:'1'

      }
    })
  }


 addTodos(Todo: TodoDto)
 {
   console.log('llego al service',Todo);
    return this._http.post<TodoDto>(`${this.api_C}/Todo`,
    {
      Name: Todo.Name,
      Creator: Todo.Creator
    });

 }

  getTodos()
  {
    return this._http.get<any>(`${this.api_C}/Todo/Getall`)
  }
}
