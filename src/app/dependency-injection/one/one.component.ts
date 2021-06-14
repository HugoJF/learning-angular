import {Component, OnInit} from '@angular/core';
import {GenericCounterService} from "../shared/generic-counter.service";
import {OneCounterService} from "../shared/one-counter.service";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  providers: [
    {
      provide: GenericCounterService, useClass: OneCounterService
    }
  ]
})
export class OneComponent implements OnInit {

  constructor(public counter: GenericCounterService) {
  }

  ngOnInit(): void {
  }

}
