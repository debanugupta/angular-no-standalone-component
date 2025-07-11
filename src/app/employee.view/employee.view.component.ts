import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/app.employee.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeInfo } from '../model/employee';

@Component({
  selector: 'app-employee.view',
  standalone: false,
  templateUrl: './employee.view.component.html',
  styleUrl: './employee.view.component.css'
})
export class EmployeeViewComponent implements OnInit {
  public employee : any = {};
  public employeeId : number = 0;

  constructor(private _employeeService : EmployeeService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=> this.employeeId = params['id']);
    // this.employee = this._employeeService.getEmployee(this.employeeId);
    this.employee = this.getEmployee(this.employeeId);
  }

  getEmployee(id: number): void {
        this._employeeService
        .getEmployeeById(id)
        .subscribe(
          (res: EmployeeInfo) => {
            next: 
            {
              this.employee = res; 
              console.log('employeeInfo',res);
            };
            error: (e: any) => 
              { 
                console.log('getEmployee Error',e) 
              }
          },
          
        );
      }
}
