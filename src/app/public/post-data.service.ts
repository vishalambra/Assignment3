import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Userdetails } from '../data/userdetails';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }

  postData(data: Userdetails){
    console.log(data);
    return this.http.post('http://localhost:3000/user',data);
  }  

}
