import { Injectable, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


//const baseUrl =  'http://localhost:8080/api/login';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
 
  public user:User
  
  constructor(public fireAuth: AngularFireAuth ,private httpclient : HttpClient) { }

  private REST_API_SERVER = "/user/"
  private _REST_API_SERVER ="/products/"
  private API_REGISTER = "/register/"
  
  public getUsuarioAPI() : Observable<any>{
    return this.httpclient.get<any>(this.REST_API_SERVER)
  }

  create(data): Observable<any> {
    return this.httpclient.post(this.REST_API_SERVER,data);
  }

  async login(email: string, password: string ){
    try {
      return await this.fireAuth.signInWithEmailAndPassword(email,password)
    } catch (error){
      console.log(error)
    }
  }
  //registerGoogle
  async registerGoogle(){
    try {
      return await this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
    } catch (error) {
      console.log(error)
    }
  }
  //logiFacebook
  async registerFacebook(){
    try {
      return await this.fireAuth.signInWithPopup(new auth.FacebookAuthProvider())
    } catch (error) {
      console.log(error)
    }
  }

  //register
  async register(email: string, password: string){
    try {
      return await this.fireAuth.createUserWithEmailAndPassword(email,password);
      
    } catch (error) {
      console.log()
    }
  }
  
  async signOut(){
    this.fireAuth.signOut();
    window.location.reload();
  }
  async getUser(){
    try{
      return  await this.fireAuth.authState.pipe(first()).toPromise()
    }catch (error){
      console.log(error)
    }
  }
  //recuperar contraseña
  async reset(email:string){
    try {
      return this.fireAuth.sendPasswordResetEmail(email)
    } catch (error) {
      console.log(error)
    }

  }
  //verificacion
  async verificacion(): Promise<void>{
    return (await this.fireAuth.currentUser).sendEmailVerification()
  }

  // getAll(): Observable<any> {
  //   return this.httpclient.get(baseUrl);
  // }

  // get(id): Observable<any> {
  //   return this.httpclient.get(`${baseUrl}/${id}`);
  // }

 

  // update(id, data): Observable<any> {
  //   return this.httpclient.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id): Observable<any> {
  //   return this.httpclient.delete(`${baseUrl}/${id}`);
  // }

////////////////////////////////////////


}
