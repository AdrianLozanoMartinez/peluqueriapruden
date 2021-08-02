import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiciosusuarioService } from '../serviciosusuario/serviciosusuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {

  constructor( private variableServicio: ServiciosusuarioService,  //Manejo del servicio
    private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.variableServicio.guardEstaAutentificado()){                             
        return true;                                                                    
        }else{
        this.router.navigateByUrl('/login');                                               
      }
      
  }
  
}
