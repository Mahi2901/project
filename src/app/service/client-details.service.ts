import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ClientDetailsService {

  constructor( private http : HttpClient ) { }

public url = 'http://localhost:3000/users';

 getTheData(){
   return this.http.get(this.url)
 }


 postTheData( data : any){
  return this.http.post(this.url , data)
 }


updateTheData(updateUserData: any){
  return this.http.put(this.url , updateUserData)
}




}


