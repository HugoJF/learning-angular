import { TestBed } from '@angular/core/testing';

import { EvenCounterService } from './even-counter.service';

describe('EvenCounterService', () => {
  let service: EvenCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
