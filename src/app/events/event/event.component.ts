import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventType} from "../../../types";

@Component({
  selector: 'app-event[event]',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnChanges {
  @Input() event!: EventType;

  startsAt!: Date;
  endsAt!: Date;

  controls = true;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.parseDates();
  }

  ngOnInit(): void {
    this.parseDates()
  }

  handleOnEdit() {

  }

  handleOnDelete() {

  }

  parseDates() {
    this.startsAt = new Date(this.event.starts_at);
    this.endsAt = new Date(this.event.ends_at);
  }
}
