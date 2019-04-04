import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PutdataService {

  constructor(public http:HttpClient) { }

  putDetails(id:number,data:any){
    return this.http.patch('http://localhost:3000/user/'+id,data);
  }
}
