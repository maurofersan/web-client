import { TestBed } from '@angular/core/testing';

import { SharedContractsService } from './shared-contracts.service';

describe('SharedContractsService', () => {
  let service: SharedContractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedContractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
