import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAfter } from './before-after';

describe('BeforeAfter', () => {
  let component: BeforeAfter;
  let fixture: ComponentFixture<BeforeAfter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeAfter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforeAfter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
