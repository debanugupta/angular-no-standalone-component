import { EmployeeService } from '../service/app.employee.service';

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { last } from 'rxjs';
import { EmployeeInfo } from '../model/employee';

@Component({
  selector: 'app-employee.add',
  standalone: false,
  templateUrl: './employee.add.component.html',
  styleUrl: './employee.add.component.css'
})
export class EmployeeAddComponent implements OnInit {
  public employeeList : EmployeeInfo[] = [] ;
  public employee : EmployeeInfo = 
  {
    emp_id:0,
    emp_code:'',
    emp_name:'',
    emp_mobile:0,
    emp_email:''
  };


    constructor(
    private _employeeService : EmployeeService,
    private _route: Router) {
  }

  ngOnInit(){
    // this.employeeList = this._employeeService.getEmployeeList();
    this.loadEmployees();
  }

  loadEmployees(): void {
      this._employeeService
      .getEmployeeInfo()
      .subscribe(
        (res: EmployeeInfo[]) => {
          next: 
          {
            this.employeeList = res; 
            console.log('employeeList',res);
          };
          error: (e: any) => 
            { 
              console.log('LoadEmployees Error',e) 
            }
        },
        
      );
    }

  // addRecord(){
  //   var lastNo = this.employeeList[this.employeeList.length-1].emp_id;
  //   if (lastNo == null)
  //     lastNo = 0;
  //   this.employee.emp_id = lastNo +1;
  //   this._employeeService.addEmployeeInfo(this.employee);
  //   this.navigateUrl();
  // }

  addEmployee() {
    var lastNo = this.employeeList[this.employeeList.length-1].emp_id;
    if (lastNo == null)
      lastNo = 0;
    this.employee.emp_id = lastNo +1;
    this._employeeService.addEmployee(this.employee)
    .subscribe(
        (res: EmployeeInfo) => {
          next: 
          {
            console.log('Added employee',res);
            this.navigateUrl();
          };
          error: (e: any) => 
            { 
              console.log('addEmployee Error',e) 
            }
        },
      );
  }

  navigateUrl(){
    this._route.navigate(['home']);
  }
}
