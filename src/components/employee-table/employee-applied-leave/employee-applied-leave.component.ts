import { Component } from '@angular/core';
import { FormArrayName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-employee-applied-leave',
  templateUrl: './employee-applied-leave.component.html',
  styleUrls: ['./employee-applied-leave.component.scss']
})
export class EmployeeAppliedLeaveComponent {

  constructor(public fb: FormBuilder, public ds: DataServiceService) {
    // console.log(this.ds.getleaveData());





  }

  ngOnInit(): void {
    // this.setupform();


  }
  leaveForm: FormGroup<any> = new FormGroup('')

  EmployeeAppliedLeaveData: any = {};

  // setupform() {
  //   this.leaveForm = this.fb.group({
  //     Id: [""],
  //     Name: [""],
  //     LastName: [""],
  //     GPN: [""],
  //     ServiceLine: [""]
  //   })


  // }

  GPN: any | undefined
  AppliedLeaveTypes: any | undefined ;
  isactive: any | undefined ;
  comment: any | undefined ;
  Duration_date:any|undefined;
  Duration_month:any|undefined;
  Duration_year:any|undefined;
  Duration_end:any|undefined;
  Duration_start:any|undefined;
  Date=new Date();

  // Date:any|undefined=this.EmployeeAppliedLeaveData.duration.end._i;
  fetchData() {
    this.EmployeeAppliedLeaveData = this.ds.getleaveData();
    console.log("this is applied");

    this.GPN = this.EmployeeAppliedLeaveData.GPN;
    this.AppliedLeaveTypes = this.EmployeeAppliedLeaveData.AppliedLeaveTypes;
    this.isactive=this.EmployeeAppliedLeaveData.isactive;
    this.comment=this.EmployeeAppliedLeaveData.comment;
    this.Duration_date=this.EmployeeAppliedLeaveData.duration.end._i.date;
    this.Duration_month=this.EmployeeAppliedLeaveData.duration.end._i.month;
    this.Duration_year=this.EmployeeAppliedLeaveData.duration.end._i.year;
    this.Duration_end=this.EmployeeAppliedLeaveData.duration.end._d;
    this.Duration_start=this.EmployeeAppliedLeaveData.duration.start._d;

    console.log(this.EmployeeAppliedLeaveData);
    console.log(this.EmployeeAppliedLeaveData.GPN);
    console.log(this.EmployeeAppliedLeaveData.AppliedLeaveTypes);
    console.log(this.EmployeeAppliedLeaveData.isactive);
    console.log(this.EmployeeAppliedLeaveData.comment);
    console.log(this.EmployeeAppliedLeaveData.duration.end._i.date);
    console.log(this.EmployeeAppliedLeaveData.duration.end._i.month);
    console.log(this.EmployeeAppliedLeaveData.duration.end._i.year);
    console.log(this.EmployeeAppliedLeaveData.duration.end._d);
    console.log(this.Date);
    console.log(  Math.floor((Date.UTC(this.Date.getFullYear(), this.Date.getMonth(), this.Date.getDate()) - Date.UTC(this.Duration_end.getFullYear(), this.Duration_end.getMonth(), this.Duration_end._i.date.getDate()) ) /(1000 * 60 * 60 * 24))
    );




    // console.log(Object.keys(this.EmployeeAppliedLeaveData));


  }

}
