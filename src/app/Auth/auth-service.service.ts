import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //private api = "http://127.0.0.1:8000/users/"
  private REST_API_SERVER: string = "http://127.0.0.1:8000"
  private httpOptions : any ;
   constructor(private _httpClient :HttpClient, ) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : "application/json",

      })
    }
  }
  isAuthenticate(): boolean{
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      return user['token']? true : false
    }
    return false    
  }

  login(username: string , password : string):Observable<any>{
    return this._httpClient.post(`${this.REST_API_SERVER}/api/v1/login/`,{username,password},this.httpOptions)
  }

  post(data):Observable<any>{
    return this._httpClient.post(`${this.REST_API_SERVER}/api/v1/user/register/`,{data})
  }

  update(data):Observable<any>{
    return this._httpClient.put(`${this.REST_API_SERVER}/api/v1/user/`,{data})
  }

  delete():Observable<any>{
    return this._httpClient.delete(`${this.REST_API_SERVER}/api/v1/user/`)
  }

  get():Observable<any>{
    return this._httpClient.get(`${this.REST_API_SERVER}/api/v1/user/`)
  }

}
