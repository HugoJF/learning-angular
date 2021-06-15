import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-tokens',
  templateUrl: './generics.component.html',
})
export class GenericsComponent {
  constructor(private http: HttpClient) {
  }

  login() {
  }
}
