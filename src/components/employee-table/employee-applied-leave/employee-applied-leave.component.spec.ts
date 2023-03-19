import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAppliedLeaveComponent } from './employee-applied-leave.component';

describe('EmployeeAppliedLeaveComponent', () => {
  let component: EmployeeAppliedLeaveComponent;
  let fixture: ComponentFixture<EmployeeAppliedLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAppliedLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAppliedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
