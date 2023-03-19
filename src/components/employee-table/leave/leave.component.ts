import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DataServiceService } from 'src/services/data-service.service';
import { MAT_DATE_FORMATS } from "@angular/material/core";
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss'],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
  ]
})
export class LeaveComponent implements OnInit {

  constructor(public fb: FormBuilder,public ds:DataServiceService) { }

  ngOnInit(): void {
    this.setupform();

  }
  AppliedLeaveTypes=["special leave",
    "personal leave",
    "public holiday"];

  leaveForm: FormGroup<any> = new FormGroup('')

  setupform() {
    this.leaveForm = this.fb.group({
      // Id: [""],
      GPN: [""],
      // duration: [""],
      AppliedLeaveTypes: [""],
      isactive: [""],
      comment: [""],
      duration:this.fb.group({
        start:[Date],
        end: [Date],
      })
    })


  }

  onSubmit(){
console.log(this.leaveForm.value);
console.log(this.leaveForm.controls['duration']);


this.ds.postleaveData(this.leaveForm.value);
console.log("this is form data");

console.log(this.ds.getleaveData());


  }

}
