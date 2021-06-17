import {Component} from '@angular/core';

@Component({
  selector: 'app-class-switch',
  templateUrl: './class-switch.component.html'
})
export class ClassSwitchComponent {
  counter = 0;

  constructor() {
  }

  increment() {
    this.counter = ++this.counter % 3;
  }

}
