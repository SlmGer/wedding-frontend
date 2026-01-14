import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteWithoutMairie } from './website-without-mairie';

describe('WebsiteWithoutMairie', () => {
  let component: WebsiteWithoutMairie;
  let fixture: ComponentFixture<WebsiteWithoutMairie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteWithoutMairie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteWithoutMairie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
