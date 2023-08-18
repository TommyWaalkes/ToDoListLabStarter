import { Component } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  filterText:string = "";
  todos:ToDo[] = [
    {completed:false, description:"Water cat"},
    {completed:false, description:"Scramble Eggs"},
    {completed:false, description:"Cheat on taxes"}, 
    {completed:false, description:"Dodge feds"}
  ];
  originals:ToDo[]= this.todos;

  deleteItem(index:number){
    this.todos.splice(index, 1);
  }

  addNewItem(newTodo:ToDo){
    this.todos.push(newTodo);
  }

  allCompleted():boolean{
    for(let i: number = 0; i < this.originals.length; i++){
      let t: ToDo = this.originals[i];
      if(t.completed == false){
        return false; 
      }
    }

    return true;
  }

  filterTodos(){
    console.log(this.filterText);
    this.todos = this.originals;
    this.todos = this.todos.filter(t => t.description.toLowerCase().includes(this.filterText.toLowerCase()));
    //console.log(this.originals);
  }

}
