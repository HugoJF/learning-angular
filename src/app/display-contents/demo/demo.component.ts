import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  host: {class: 'contents'}
})
export class DemoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
