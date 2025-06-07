import { Injectable } from '@angular/core';
import { EmployeeInfo } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public employeeList: EmployeeInfo[] = [];

  ngOnInit(){
    this.employeeList = [
      { "emp_id": 1, "emp_name": "Roger Smith", "emp_code" : "ET0002334", "emp_mobile" : 9830098300, "emp_email": "roger.smith@yahoo.com"},
      { "emp_id": 2, "emp_name": "Alex Bob", "emp_code" : "ET0002992", "emp_mobile" : 9830198301, "emp_email" : "alex.bob@gmail.com"},
      { "emp_id": 3, "emp_name": "Stephen Ken", "emp_code" : "ET0001675", "emp_mobile" : 88830098312, "emp_email" : "stephen.123@yahoo.com"},
      ];
  }

  getEmployeeList()  {
    if (this.employeeList.length == 0 )
        this.ngOnInit();
    return this.employeeList;
  }

  initializeData(){
    this.getEmployeeList();
  }

  getEmployee(id : number){
    return this.employeeList.find(e=>e.emp_id == id);
  }

  addEmployeeInfo(emloyee : EmployeeInfo){
    this.employeeList.push(emloyee);
  }
}
