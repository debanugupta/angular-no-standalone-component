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
  public employee : any = {};

    constructor(
    private _employeeService : EmployeeService,
    private _route: Router) {
  }

  ngOnInit(){
    this.employeeList = this._employeeService.getEmployeeList();
  }

  addRecord(){
    var lastNo = this.employeeList[this.employeeList.length-1].emp_id;
    if (lastNo == null)
      lastNo = 0;
    this.employee.emp_id = lastNo +1;
    this._employeeService.addEmployeeInfo(this.employee);
    this.navigateUrl();
  }

  navigateUrl(){
    this._route.navigate(['home']);
  }
}
