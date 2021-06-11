import {Injectable} from '@angular/core';

export type Todo = {
  title: string;
  description: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  id: number = 2;
  todos: { [id: number]: Todo } = {
    0: {
      title: 'First todo',
      description: 'This is the first todo I have ever made',
      done: false,
    },
    1: {
      title: 'First todo',
      description: 'This is the first todo I have ever made',
      done: true,
    }
  };

  constructor() {
  }

  index() {
    return this.todos;
  }

  show(id: number) {
    return this.todos[id];
  }

  setDone(id: number, done: boolean = true) {
    if (!this.todos[id]) {
      return;
    }

    this.todos[id]!.done = done;
  }

  store(data: Todo) {
    this.todos[++this.id] = data;
  }

  deleteById(id: number) {
    delete this.todos[id];
  }
}
