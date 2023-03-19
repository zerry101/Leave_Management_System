import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  constructor(public fb:FormBuilder){

  }


  ngOnInit(): void {
      this.setupform();
  }

  leaveForm:FormGroup<any>=new FormGroup('')

  setupform(){
    this.leaveForm=this.fb.group({
      Id:[""],
      Name:[""],
      LastName:[""],
      GPN:[""],
      ServiceLine:[""]
    })

  }

  onSubmit(){
    console.log(this.leaveForm.value);

  }

  title = 'Leave_Management_System';

}


