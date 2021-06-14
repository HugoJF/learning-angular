import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-class-toggle',
  templateUrl: './class-toggle.component.html'
})
export class ClassToggleComponent implements OnInit {
  on: boolean = false;
  count: number = 0;

  constructor() {
    //
  }

  ngOnInit(): void {
  }

  toggle() {
    this.on = !this.on;
  }

  increment() {
    this.count = ++this.count % 3;
  }
}
