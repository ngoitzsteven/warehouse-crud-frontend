import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class WarehouseAPIService {
  APIServer = `warehouse/`
  constructor(private http: HttpClient) {
    this.http = http;
   }

   public findWarehouseList() : Observable<any> {
    return this.http.get(environment.baseUrl + this.APIServer);
  }
  public findWarehouse() : Observable<any> {
    return this.http.get(environment.baseUrl + this.APIServer);
  }
}
