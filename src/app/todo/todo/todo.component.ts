import {Component, Input} from '@angular/core';
import {Todo} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo: { [id: string]: Todo } = {};

  constructor() {
  }
}
