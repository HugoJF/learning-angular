import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericCounterService {
  count = 0;

  abstract increment(): void;
}
