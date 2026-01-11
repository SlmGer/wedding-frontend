import { TestBed } from '@angular/core/testing';

import { AdminAccommodation } from './admin-accommodation';

describe('AdminAccommodation', () => {
  let service: AdminAccommodation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAccommodation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
