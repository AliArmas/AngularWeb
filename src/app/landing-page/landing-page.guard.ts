import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageGuard implements CanActivate {
  
  constructor(private _svc : ServiceService,private _router : Router){}
  //observable de origen 
  public user$ : Observable<any> = this._svc.fireAuth.user

  canActivate(): Observable<boolean> {
    //map : operador observa resultados emitidos or el observable de origen 
    return this.user$.pipe(map(user => {
      //verifica la existencia de un ingreso y devuelve los valores true : false
      if (user) {
        this._router.navigate(['/home'])
        return false;
      } else {
        return true;
      }
    })); 
  }
}
