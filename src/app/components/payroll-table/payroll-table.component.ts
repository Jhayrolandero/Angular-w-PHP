import { Component } from '@angular/core';
import { TestService } from '../test/test.service';

@Component({
  selector: 'app-payroll-table',
  templateUrl: './payroll-table.component.html',
  styleUrl: './payroll-table.component.css'
})
export class PayrollTableComponent {

  constructor(private testService: TestService){}

  datas: any = []
  // getAllUsers() {
  //   this.testService.getUsers()
  //   .subscribe(
  //     data => {this.datas = data
  //     }
  //   , Error => {console.log(Error)}
  //   )
  // }

  getUsers() {
    this.testService.getUsers().
      subscribe
      ((data: any) => (this.datas = data),
      (error:any) => (console.error(error))
    )
  }
  ngOnInit() {
    this.getUsers();
  }

}
