import { TestBed } from '@angular/core/testing';

import { AdminRsvp } from './admin-rsvp';

describe('AdminRsvp', () => {
  let service: AdminRsvp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRsvp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
