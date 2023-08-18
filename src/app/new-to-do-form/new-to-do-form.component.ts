import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-new-to-do-form',
  templateUrl: './new-to-do-form.component.html',
  styleUrls: ['../app.component.css']
})
export class NewToDoFormComponent {
  @Output() newTodoEvent = new EventEmitter<ToDo>();
  newTodo:ToDo = {completed:false} as ToDo;

  createNewTodo(){
    let t:ToDo = {description:this.newTodo.description, completed:false};
    this.newTodo.description = "";
    this.newTodoEvent.emit(t);
  }
}
