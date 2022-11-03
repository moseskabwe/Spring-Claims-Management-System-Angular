import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedclaimAddComponent } from './declinedclaim-add.component';

describe('DeclinedclaimAddComponent', () => {
  let component: DeclinedclaimAddComponent;
  let fixture: ComponentFixture<DeclinedclaimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclinedclaimAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclinedclaimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
