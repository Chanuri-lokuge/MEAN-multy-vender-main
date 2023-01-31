import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Product } from "../../product";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiurl = "http://localhost:3000/product";



  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiurl);
  }

  getSingleProduct(id: String): Observable<Product[]> {
    let url = this.apiurl+'/read/'+id;

    return this.http.get<Product[]>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiurl+"/create", product, httpOptions);
  }


}
