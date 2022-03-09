import { Component, OnInit } from '@angular/core';
import { Tareas, TodoDto } from 'src/app/Common/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  listTareas: Tareas[] = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getTodos().subscribe((x)=>{
      this.listTareas = x.result;
    });
  }

}
