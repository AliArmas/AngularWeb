import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import {ServiceService } from '../service.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from '../Auth/auth-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  resetEmail = new FormControl('')
  loginForm: FormGroup
 
  constructor(private svc: ServiceService,private svcA: AuthServiceService, private router: Router,private AFire: AngularFireAuth, private _formBuider : FormBuilder) { }
    ngOnInit(): void {
    this.loginForm = this._formBuider.group({
      user: [''],
      password:[''],
    })
  }

  onLogin(){
    const data = this.loginForm.value
    this.AFire.signInWithEmailAndPassword(data.userEmail,data.userPassword)
    this.router.navigate(['/home'])
  }

  async onRegisterFacebook(){
    try {
      this.svc.registerFacebook();
    } catch (error) {
      console.log(error)
    }
  }
  async onRegisterGoogle(){
    try {
     await this.svc.registerGoogle();
      this.router.navigate(['/home'])
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }


  async resetPassword(){
    try {
      const email = this.resetEmail.value
      await this.svc.reset(email);
      this.router.navigate(['/login'])
    } catch (error) {
      console.log(error)
    }  
  }
  ////////////////////////////////////////////////////////
                //funciones entrega//
  /////////////////////////////////////////////////////////
  login(){
    const data = this.loginForm.value;
    if(data.user && data.password){
      this.svcA.login(data.user,data.password).subscribe(access =>{
        console.log(access)
      });
    }
  }
  
}
