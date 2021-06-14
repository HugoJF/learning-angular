import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {

  @Input('name') name: string = '';

  constructor() { }
}
