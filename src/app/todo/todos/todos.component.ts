import {Component} from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {

  constructor(private todos: TodoService) {
  }

  getTodos() {
    return Object
      .entries(this.todos.index())
      .map(([id, todo]) => ({
        id: Number(id),
        ...todo
      }));
  }

  toggleTodo(id: number) {
    this.todos.setDone(id, !this.todos.show(id).done);
  }
}
