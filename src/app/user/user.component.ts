import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';
import {AngularFireStorage } from '@angular/fire/storage'
import { first } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

usuarios = []
private newPass:String
private email:String
private newUrl:String
public user : any
private logued : boolean

public user$ : Observable<any> = this.svc.fireAuth.user

constructor(private svc : ServiceService) { }
 
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


  //get usuario
   usuario(){
    this.svc.getUsuarioAPI().subscribe((data:any[]) => {
      this.usuarios = data
      console.log(this.usuarios);
    });
  }

  //formularios

  formUser = new FormGroup({
      descrip : new FormControl('')
  })
  //cambio de contraseña
  // async changePass(){
  //   await (await this.svc.fireAuth.authState.pipe(first()).toPromise()).updatePassword(""+this.newPass) 
    
  // }
  //cambio de foto
  // async changeEmail(){
  //   await (await (await this.svc.fireAuth.currentUser).updateEmail(""+this.email))  
  // }
  
  clean(){
    this.formUser.reset({
      descrip: ''
    })
  }
}