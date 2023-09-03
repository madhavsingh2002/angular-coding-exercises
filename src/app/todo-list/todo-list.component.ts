import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: any[];
  newTodo:string = '';
  constructor(private dataService:DataService){
    this.todos = dataService.getTodos()
  }
  // ADD TODO
  addTodo(){
    if(this.newTodo.trim()!==''){
      this.dataService.addTodo(this.newTodo);
      this.newTodo = ''
    }
  }
  updateTodoText(todo:any){
    if(!todo.completed && !todo.isUpdating){
      todo.isUpdating = true;
    }
    
  }
  saveTodoText(todo:any){
    todo.isUpdating = false;
    this.dataService.updateTodo(todo.id,todo.text)
  }
  toggleUpdateMode(todo:any){
    todo.isUpdating = !todo.isUpdating;
  }
  deleteTodo(id:number){
    this.dataService.deleteTodo(id)
  }
}
