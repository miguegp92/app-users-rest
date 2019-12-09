import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  configUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAllData(from:string){

    return this.http.get(this.configUrl + `/${from}`);

  }

  setKeySearch(from:string){
    switch (from) {
      case 'users': return 'userId';
    }
  }
  getDataById(from:string, key: number){
    return this.http.get(this.configUrl + `/${from}/${key}`);
    // return this.http.get(this.configUrl + `/${from}/${this.setKeySearch(from)}=${key}`);
  }
  getDataByKey(from:string, key: number){
    return this.http.get(this.configUrl + `/${from}?userId=${key}`);
    // return this.http.get(this.configUrl + `/${from}/${this.setKeySearch(from)}=${key}`);
  }
}
