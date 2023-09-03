// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private todos: any[] = [];

  constructor() {}

  // Add a new todo
  addTodo(text: string) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  // Get all todos
  getTodos() {
    return this.todos;
  }

  // Update a todo by ID
  updateTodo(id: number, newText: string) {
    const todoToUpdate = this.todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      todoToUpdate.text = newText;
    }
  }

  // Delete a todo by ID
  deleteTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
  