import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimpaymentAddComponent } from './claimpayment-add.component';

describe('ClaimpaymentAddComponent', () => {
  let component: ClaimpaymentAddComponent;
  let fixture: ComponentFixture<ClaimpaymentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimpaymentAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimpaymentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
