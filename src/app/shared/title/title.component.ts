import {Component, Input} from '@angular/core';

export enum TitleType {
  Super, Header, Subheader,
}

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent {
  TitleTypes = TitleType;

  @Input() type: TitleType = TitleType.Super;

  constructor() {
  }

}
