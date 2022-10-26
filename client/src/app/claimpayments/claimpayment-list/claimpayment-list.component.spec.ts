import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimpaymentListComponent } from './claimpayment-list.component';

describe('ClaimpaymentListComponent', () => {
  let component: ClaimpaymentListComponent;
  let fixture: ComponentFixture<ClaimpaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimpaymentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimpaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
