import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BackendService} from "../shared/backend.service";
import {EventType} from "../../../types";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit, OnChanges {
  events: EventType[] = [];
  page = 1;

  constructor(private backend: BackendService, private activated: ActivatedRoute, private router: Router) {
  }

  run() {
    console.log(this.activated.queryParams);
    this.router.navigate([], {
      queryParams: {page: ++this.page},
      queryParamsHandling: "merge",
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page'].currentValue !== changes['page'].previousValue) {
      this.getEvents();
    }
  }

  getEvents() {
    this.backend
        .events(this.page)
        .subscribe(response => this.events = response.data)
  }

  ngOnInit(): void {
    this.activated.queryParams.subscribe(
      params => {
        this.page = params['page'] ?? 1;
        this.getEvents();
      }
    );
  }
}
