import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tareas, TodoDto } from 'src/app/Common/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
  export class TodoComponent implements OnInit {
      agregarTarea: FormGroup;

    constructor(private fb:FormBuilder, private _api: ApiService)
     {
      this.agregarTarea = this.fb.group({
        tarea: ['',Validators.required]
      })
    }

    ngOnInit(): void {
    }


    agregarV1(){
      //console.log(this.agregarTarea);
      const tareanueva:Tareas={
      name: this.agregarTarea.get('tarea')?.value,
      creator: 'Alexander'
    }
  }


    agregar() {
      const tareanueva:TodoDto={
      Name: this.agregarTarea.get('tarea')?.value,
      Creator: 'Alexander'
      }
      this._api.addTodos(tareanueva).subscribe((x)=>{
        console.log('llego a la suscription',x);
      });
    }

}
