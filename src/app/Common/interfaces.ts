export interface LoginResponse{
  success: boolean
  //user:User
  token:string

}

export interface User{
  name:string
  token:string

}

export interface Tareas{
  name:string
  creator:string
}

export interface UserDto{
  Name:string
  Password?:string
  Type?: number
  Telephone?:number
  Address?:string
  EmploymentDate?:Date
}

export interface TodoDto{
  Name: string
  Creator: string
}
