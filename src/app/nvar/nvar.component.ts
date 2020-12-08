import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService} from '../service.service';

@Component({
  selector: 'app-nvar',
  templateUrl: './nvar.component.html',
  styleUrls: ['./nvar.component.css']
})
export class NvarComponent implements OnInit {

  formSearch = new FormGroup({
    search: new FormControl('')
  })

  public user : any;
  public logued = false;
  categorias = [
    'Consumibles',
    'Muebles',
    'Computadoras',
    'Servicio tecnico'
  ]
  
  public user$ : Observable<any> = this.svc.fireAuth.user;

  constructor(private svc: ServiceService,private router: Router) { }
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

  abirirPagina(){
    this.router.navigate(["/user"])
  }

  logOut(){
    try {
      this.svc.signOut()
    } catch (error) {
     console.log(error) 
    }
  }

  async searching(){
    try{
      console.log(this.formSearch.value)
    }catch(error){
      console.log(error)
    }
  }
}