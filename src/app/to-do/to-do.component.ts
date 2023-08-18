import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['../app.component.css']
})
export class ToDoComponent {
  @Input() todoItem = {} as ToDo;
  @Input() index: number = 0; 
  @Output() deleteItemEvent = new EventEmitter<number>();

  editing:boolean = false; 
  deleteTodo(){
    this.deleteItemEvent.emit(this.index);
  }

  complete(){
    this.todoItem.completed = true;
  }

  toggleEdit(){
    this.editing = !this.editing;
  }
}
