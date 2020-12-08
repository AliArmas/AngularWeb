import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {AngularFireStorage } from '@angular/fire/storage'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent implements OnInit {
  
  formContacUs = new FormGroup({
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    message : new FormControl('',Validators.required)
  })

  public logued=false
  public user:any
  
  constructor(private router : Router,private svc: ServiceService,private storage: AngularFireStorage) { }
  async ngOnInit(){
    try {
      this.user = await this.svc.getUser();
      if(this.user){
        this.logued = true;
      }
    } catch (error) {
      console.log(error)
    }
  }

  redirectTo(){
    this.router.navigate(['/register'])
  }
  valuesEmail(){
    console.log(this.formContacUs.value)
  }

}
