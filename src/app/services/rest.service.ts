import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  configUrl = 'https://jsonplaceholder.typicode.com';
  app: any = [
    {title: 'users', data: []},
    {title: 'albums', data: []},
    {title: 'photos', data: []},
    {title: 'posts', data: []},
    {title: 'comments', data: []},
    {title: 'todos', data: []}
  ]


  constructor(private http: HttpClient) {
  }

  getAllData(from:string){
    return this.http.get(this.configUrl + `/${from}`);
  }

  getDataById(from:string, key: number){
    return this.http.get(this.configUrl + `/${from}/${key}`);
    // return this.http.get(this.configUrl + `/${from}/${this.setKeySearch(from)}=${key}`);
  }
  getDataByKey(from:string, key: string, id: number){
    return this.http.get(this.configUrl + `/${from}?${key}=${id}`);
    // return this.http.get(this.configUrl + `/${from}/${this.setKeySearch(from)}=${key}`);
  }

  fillDataService(){
    return new Promise( (resolve, reject) => {
      try {
        this.app.forEach( tabla => {

          this.getAllData(tabla.title).subscribe((data: any) => {
            tabla.data = data;
          });

        });
      } catch (e) {
        reject(e);
      } finally {
        resolve(this.app);
      }
    });
  }
}
