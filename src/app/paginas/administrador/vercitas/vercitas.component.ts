import { Component, OnInit } from '@angular/core';
import { CitasservicioadService } from '../vercitas/servicio/citasservicioad.service';
import { ClienteModel } from '../../citas/models/cliente.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServiciosusuarioService } from '../../../componentes/login/serviciosusuario/serviciosusuario.service';

@Component({
  selector: 'app-vercitas',
  templateUrl: './vercitas.component.html',
  styleUrls: ['./vercitas.component.css']
})
export class VercitasComponent implements OnInit {

  verCitas: ClienteModel[] = [];     

  constructor( private servicio: CitasservicioadService,
                private servicefire: ServiciosusuarioService,
                private router: Router, ) { }

  ngOnInit() {
    this.servicio.getTodosElementos().subscribe( respuesta => {     
      console.log(respuesta);
      this.verCitas = respuesta;                                                 
    });
  }

  borrarUnElemento(  borrar: ClienteModel, i: number ){                       

    Swal.fire({
      title: '¿Estás seguro?',
      text: `Está seguro que desea borrar a ${ borrar.nombre }`,     
      // icon: 'question',
      showConfirmButton: true,                                                  
      showCancelButton: true,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/peluqueria-pruden.appspot.com/o/logo%2FLOGO.png?alt=media&token=4cc31d20-e1a8-4cba-a8de-d77234845efb'                                                                                                                                      
    }).then(variableContestacion => {                                       
      if (variableContestacion.value){                                      
          
          this.verCitas.splice(i, 1);                                                  
  
          this.servicio.borrarElemento( borrar.id ).subscribe();         
      }
    });         
}

salir(){                             
  this.servicefire.logout();               
  this.router.navigateByUrl('/home');     
}

}
