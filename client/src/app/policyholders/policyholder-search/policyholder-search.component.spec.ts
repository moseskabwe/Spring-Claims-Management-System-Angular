import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyholderSearchComponent } from './policyholder-search.component';

describe('PolicyholderSearchComponent', () => {
  let component: PolicyholderSearchComponent;
  let fixture: ComponentFixture<PolicyholderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyholderSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyholderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
