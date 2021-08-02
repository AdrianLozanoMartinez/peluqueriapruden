import { Component, OnInit } from '@angular/core';
import { ServiciosusuarioService } from '../../../componentes/login/serviciosusuario/serviciosusuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  

   
    constructor( private servicefire: ServiciosusuarioService,  private router: Router) { 

               }

  
  ngOnInit() {
    
  }
  salir(){                             
    this.servicefire.logout();               
    this.router.navigateByUrl('/home');     
  }

}


