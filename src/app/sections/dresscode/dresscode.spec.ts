import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dresscode } from './dresscode';

describe('Dresscode', () => {
  let component: Dresscode;
  let fixture: ComponentFixture<Dresscode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dresscode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dresscode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
