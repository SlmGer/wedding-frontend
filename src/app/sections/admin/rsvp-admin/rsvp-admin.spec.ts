import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpAdmin } from './rsvp-admin';

describe('RsvpAdmin', () => {
  let component: RsvpAdmin;
  let fixture: ComponentFixture<RsvpAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsvpAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsvpAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
