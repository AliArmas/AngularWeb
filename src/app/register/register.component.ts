import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, MinLengthValidator, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Auth/auth-service.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})


export class RegisterComponent implements OnInit { 
  // pattern : any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  registerFrom = new FormGroup({
    // ,Validators.pattern(this.pattern)]
      user: new FormControl('',[Validators.required,Validators.minLength(5)]),
      name: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.minLength(5)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      status: new FormControl('',[Validators.required])
  })
  registerForm : FormGroup
  constructor(private svc : AuthServiceService,private router: Router, private _formBuild : FormBuilder) { }
  
  ngOnInit(): void {
    this.registerForm = this._formBuild.group({
      user:['',Validators.requiredTrue],
      name:['',Validators.requiredTrue],
      email:['',Validators.requiredTrue],
      password:['',Validators.requiredTrue],
      status:['',Validators.requiredTrue]
    })
  }

  // saveUsuario(): void {
  //   const data = this.registerForm.value
  //   this.svc.newUsuarioAPI(data).subscribe(response =>{
  //     console.log(response);
  //   },error => {
  //     console.log(error);
  //   });
  // }--proxy-config proxy.json
  registerPy(){
    const data =this.registerForm.value;
    //this.svc.registerPost(data.user,data.name,data.email,data.password,data.status)
  }

  onRegister(){
    const {email,password} = this.registerFrom.value; 
    this.svc.login(email,password);
    this.router.navigate(['/home'])
  }

  create(){
    const data = this.registerForm.value
    this.svc.post(data).subscribe(response =>{
        console.log(response);
      },error => {
      console.log(error);
    });
  }

  get(){
    console.log(this.svc.get())
  }

}
