import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { LeaveComponent } from './leave/leave.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatRadioModule} from '@angular/material/radio';
import { EmployeeAppliedLeaveComponent } from './employee-applied-leave/employee-applied-leave.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';


// import { AppModule } from 'src/app/app.module';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LeaveComponent,
    EmployeeTableComponent,
    EmployeeAppliedLeaveComponent,
    LeaveBalanceComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatRadioModule
    // AppModule
  ],
  exports:[
    LeaveComponent,
    EmployeeTableComponent,
    EmployeeAppliedLeaveComponent,
    LeaveBalanceComponent
  ],

})
export class ComponentsModule { }
