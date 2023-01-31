import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Rating } from "../../rating";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private apiurl = "http://localhost:3000/rating";



  constructor(private http: HttpClient) { }

  getrating(): Observable<Rating[]> {
    return this.http.get<Rating[]>(this.apiurl);
  }


  addrating(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(this.apiurl+"/create", rating, httpOptions);
  }

}
