import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  @Input() count: number = 0;
  @Output() onIncrement = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
