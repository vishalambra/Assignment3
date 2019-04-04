import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http:HttpClient) { }

  getFaq(){
    return this.http.get('http://localhost:3000/faq');
  }
}
