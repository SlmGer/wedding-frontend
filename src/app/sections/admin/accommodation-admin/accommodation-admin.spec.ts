import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationAdmin } from './accommodation-admin';

describe('AccommodationAdmin', () => {
  let component: AccommodationAdmin;
  let fixture: ComponentFixture<AccommodationAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccommodationAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
