import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from './../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  constructor() {}

  ngAfterContentInit(): void {
    // console.log('AfterContentInit is called');
    // console.log(
    //   'EmployeeComponent -> Inside ContainerComponent',
    //   this.employeeComponent
    // );

    this.employeeComponent.text1 = 'Emp Text1 (Updated)';
  }
}
