import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Order } from "../../order";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiurl = "http://localhost:3000/order";



  constructor(private http: HttpClient) { }

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiurl);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiurl+"/create", order, httpOptions);
  }

}
