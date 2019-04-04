import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient) { }

  getFaq(){
    return this.http.get('http://localhost:3000/Past');
  }

  getPast(){
    return this.http.get('http://localhost:3000/Upcoming');
  }
  
}
