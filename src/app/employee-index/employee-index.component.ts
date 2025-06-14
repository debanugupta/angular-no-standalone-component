import { Component, OnInit } from '@angular/core';
import { EmployeeInfo } from '../model/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/app.employee.service';

@Component({
  selector: 'app-employee-index',
  standalone: false,
  templateUrl: './employee-index.component.html',
  styleUrl: './employee-index.component.css'
})
export class EmployeeIndexComponent implements OnInit {
  public employeeList : EmployeeInfo[] = [] ;
  public employeeListTest : EmployeeInfo[] = [] ;

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

  navigateUrl(path:string, id:number){
    this._route.navigate([path, id]);
  }
}
