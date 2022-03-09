import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { ListTodoComponent } from './components/list-todo/list-todo/list-todo.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
{path:'',component: HomeComponent},
{path:'home',component: HomeComponent},
{path:'login',component: UserComponent},
{path:'todo',component: TodoComponent},
{path:'list',component:ListTodoComponent},
{path:'add',component:AddUserComponent},
{path:'**',redirectTo:'/',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
