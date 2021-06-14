import {Injectable} from '@angular/core';
import {GenericCounterService} from "./generic-counter.service";

@Injectable({
  providedIn: 'root'
})
export class OneCounterService extends GenericCounterService {
  increment(): void {
    this.count++;
  }
}
