import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyholderDetailsComponent } from './policyholder-details.component';

describe('PolicyholderDetailsComponent', () => {
  let component: PolicyholderDetailsComponent;
  let fixture: ComponentFixture<PolicyholderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyholderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyholderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
