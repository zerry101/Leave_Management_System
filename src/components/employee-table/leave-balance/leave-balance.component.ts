import { Component } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.scss']
})
export class LeaveBalanceComponent {

  constructor(public ds: DataServiceService) {

  }


  EmployeeAppliedLeaveData: any | undefined;

  daysDifference:any|undefined;
  FinalDate: any | undefined;
  currentDate = new Date();
  LeaveBalanceData() {
    this.EmployeeAppliedLeaveData = this.ds.getleaveData();
    this.FinalDate = this.EmployeeAppliedLeaveData.duration.end._d;

    // this.ds.getleaveData();

    // console.log(  Math.floor((Date.UTC(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()) - Date.UTC(this.FinalDate.getFullYear(), this.FinalDate.getMonth(), this.FinalDate.getDate()) ) /(1000 * 60 * 60 * 24)));
    // );


    this.daysDifference=Math.floor((Date.UTC(this.FinalDate.getFullYear(), this.FinalDate.getMonth(), this.FinalDate.getDate()) - Date.UTC(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()) ) /(1000 * 60 * 60 * 24));

  }

}
