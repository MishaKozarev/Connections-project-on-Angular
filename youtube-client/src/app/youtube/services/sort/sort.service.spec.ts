import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';

describe('SortDateService', () => {
  let service: SortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});