import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MateriaPrimaComponent } from './components/materia-prima/materia-prima.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/Interceptors';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTodoComponent } from './components/list-todo/list-todo/list-todo.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MateriaPrimaComponent,
    NavbarComponent,
    HomeComponent,
    TodoComponent,
    ListTodoComponent,
    AddUserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [
      CookieService
      ,
    {provide:HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
