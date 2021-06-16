import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input[name][label]',
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() name!: string;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() error?: Error;
  @Input() type: string = '';

  constructor() {
  }
}
