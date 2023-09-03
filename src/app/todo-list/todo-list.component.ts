import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: any[];
  newTodo: string = '';

  constructor(private dataService: DataService) {
    this.todos = dataService.getTodos();
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.dataService.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }

  updateTodoText(todo: any) {
    // Only allow updating if the todo is not completed and not in update mode
    if (!todo.completed && !todo.isUpdating) {
      todo.isUpdating = true;
    }
  }

  saveTodoText(todo: any) {
    // Save the updated text and exit update mode when input loses focus
    todo.isUpdating = false;
    this.dataService.updateTodo(todo.id, todo.text);
  }

  toggleUpdateMode(todo: any) {
    // Toggle update mode when the "Update" button is clicked
    todo.isUpdating = !todo.isUpdating;
  }

  deleteTodo(id: number) {
    this.dataService.deleteTodo(id);
  }
}
