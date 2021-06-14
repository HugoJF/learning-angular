import { TestBed } from '@angular/core/testing';

import { OneCounterService } from './one-counter.service';

describe('OneCounterService', () => {
  let service: OneCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
