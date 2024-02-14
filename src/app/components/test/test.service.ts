import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  datas: any = []
  url : string = "http://localhost/PHP-w-Angular/"
  constructor(private http: HttpClient) { }

  // getUserFormData(data: any): any {
    
  //   return this.http.get(this.url)
  //     .subscribe(
  //       data => (this.datas = data),
  //       error => (console.error(error))
  //   )
  // }

  getUsers(): any {
    return this.http.get(this.url)
  }

  addUser(data: any): any {
    return this.http.post(this.url, data)
    .subscribe(
      data => {console.log(data)},
      error => {console.log(error.statusText)}
    )
  }

 
}
