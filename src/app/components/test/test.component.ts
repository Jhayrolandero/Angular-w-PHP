import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from "./test"
import { TestService } from './test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  constructor( private testService: TestService) {}

  getUserFormData(data : any): void {
    this.testService.addUser(data)
  }
  username: string = ""
  password: string = ""
}