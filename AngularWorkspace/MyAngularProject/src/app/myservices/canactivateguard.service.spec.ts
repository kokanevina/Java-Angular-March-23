import { TestBed } from '@angular/core/testing';

import { CanactivateguardService } from './canactivateguard.service';

describe('CanactivateguardService', () => {
  let service: CanactivateguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivateguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
