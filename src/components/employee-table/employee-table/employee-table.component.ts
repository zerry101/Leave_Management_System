import { Component } from '@angular/core';
import { FormArrayName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DataServiceService } from 'src/services/data-service.service';


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {

  serviceLineArray: Array<String> = ["special leave", "personal leave", "public holiday"]

  tableData:any;

  constructor(public fb: FormBuilder, public ds: DataServiceService) {

  }


  ngOnInit(): void {
    this.setupform();

  }

  leaveForm: FormGroup<any> = new FormGroup('')

  setupform() {
    this.leaveForm = this.fb.group({
      Id: [""],
      Name: [""],
      LastName: [""],
      GPN: [""],
      ServiceLine: [""]
    })

  }





  onSubmit() {
    // console.log(this.leaveForm.value);
    // this.ds.postData(this.leaveForm.value);
    // this.ds.getData().subscribe((data: any) => {
    //   console.log("this is form data: "+data);
    // })
console.log(typeof(this.leaveForm.value));

    this.ds.postData(this.leaveForm.value);

   this.tableData=this.ds.getData();

   console.log("this is table data");
   console.log(this.tableData);




  }

  title = 'Leave_Management_System';


}
