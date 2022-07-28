import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'Product';

@Injectable({
  providedIn: 'root',
})
export class ProductAPIServiceService {

  APIServer = `product/`;
  constructor(private http: HttpClient) {
    this.http = http;
  }

  public findProductList(): Observable<any> {
    return this.http.get(environment.baseUrl + this.APIServer);
  }

  public saveProduct(product: Product) {
    console.log(product + 'Saved');
    return this.http.post(this.APIServer, product);
  }

  public deleteProduct(id: number): Observable<any>{
    console.log('delete product id' + id);
    if (id) {
      console.log(id);  
      return this.http.delete (environment.baseUrl + this.APIServer + id);
    } else {
      throw new Error('Product Error 404 not found. Cannot Delete');
    }
  }
  // deleteProductName(id: String) {
  //   if (id) {
  //     return this.http.delete(environment.baseUrl + this.APIServer + id);
  //   } else {
  //     throw new Error('Product Error 404 not found. Cannot Delete');
  //   }
  // }

  updateProduct(update: Product): Observable<any> {
    if (update) {
      return this.http.put(environment.baseUrl + this.APIServer, update);
    } else {
      throw new Error('Product Error 404 not found. Cannot Update.');
    }
  }
  addProduct(product: Product) {
    return this.http.post(environment.baseUrl + this.APIServer, product);
  }
}
