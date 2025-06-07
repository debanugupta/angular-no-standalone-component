import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';
import { EmployeeAddComponent } from './employee.add/employee.add.component';
import { EmployeeViewComponent } from './employee.view/employee.view.component';

const routes: Routes =  [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: EmployeeIndexComponent
    },
    {
        path:'employee-index',
        component:EmployeeIndexComponent
    },
    {
        path:'employee-add',
        component:EmployeeAddComponent
    },
    {
        path:'employee-view/:id',
        component:EmployeeViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
