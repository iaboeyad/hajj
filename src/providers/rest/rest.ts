import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
  apiUrl = 'http://hhajj.demo4dev.net/Service';

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/json').subscribe(data => {
        resolve(data);
        console.log(data,'test');
      }, err => {
        console.log(err,'error');
      });
    });
  }
}
