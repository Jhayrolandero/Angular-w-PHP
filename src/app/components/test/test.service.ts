import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  url : string = "http://localhost/angularphp/api/v1/users"
  constructor(private http: HttpClient) { }

  getUserFormData(data : any): any {
    return this.http.get(this.url);
  }
  
  getUsers(){
    return this.http.get(this.url);
  }
  addUser(data: any): any {
    return this.http.post(this.url, data)
    .subscribe(
      data => {console.log(data)},
      error => {console.log(error)}
    )
  }

}
