import {Component, OnInit} from '@angular/core';
import {GenericCounterService} from "../shared/generic-counter.service";
import {EvenCounterService} from "../shared/even-counter.service";

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  providers: [
    {
      provide: GenericCounterService, useClass: EvenCounterService,
    }
  ]
})
export class EvenComponent implements OnInit {

  constructor(public counter: GenericCounterService) {
  }

  ngOnInit(): void {
  }
}
