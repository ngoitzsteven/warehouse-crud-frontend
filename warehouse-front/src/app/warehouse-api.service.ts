import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'
import { Warehouse } from 'Warehouse';

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
  saveWarehouse(warehouse :Warehouse) { 
    console.log(warehouse + "Saved");
    return this.http.post(environment.baseUrl + this.APIServer, warehouse);  }

  deleteWarehouse(id : number) {               
      if (id) {
        console.log(id);  
        return this.http.delete (environment.baseUrl + this.APIServer + id);
      } else {
        throw new Error("Warehouse Error 404 not found. Cannot Delete"); 
      }
    }
  }
