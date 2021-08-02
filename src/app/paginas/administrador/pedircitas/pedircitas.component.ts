import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosusuarioService } from '../../../componentes/login/serviciosusuario/serviciosusuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteModel } from '../../../paginas/citas/models/cliente.model';
import { NgForm } from '@angular/forms';
import { ServicioadministradorService } from '../../../componentes/login/administrador/servicio/servicioadministrador.service'
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedircitas',
  templateUrl: './pedircitas.component.html',
  styleUrls: ['./pedircitas.component.css']
})
export class PedircitasComponent implements OnInit {

  FormGroup: FormGroup;

  clienteModel = new ClienteModel();

  mostrarCliente: ClienteModel[] = [];  
  
  constructor(private servicefire: ServiciosusuarioService,
    private router: Router,
    private FormBuilder: FormBuilder, 
    private servicio: ServicioadministradorService,
    private Route: ActivatedRoute) { }

    guardar( cogerDatos: NgForm ){         

      if ( cogerDatos.invalid ){       
         console.log('Formulario no válido');
          return;
      }

      Swal.fire({                                                                                    
        title: 'Espere',                                                                                
        text: 'Guardando información',                                                                   
        // icon: 'info',    
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/peluqueria-pruden.appspot.com/o/logo%2FLOGO.png?alt=media&token=4cc31d20-e1a8-4cba-a8de-d77234845efb',                                                                                
        allowOutsideClick: false                                                                         
        });
        Swal.showLoading();                                                                                 
    

        let variablePeticion: Observable<any>; 

      if (this.clienteModel.id){                                                                                
        variablePeticion = this.servicio.actualizarCliente(this.clienteModel);                           
        variablePeticion.subscribe( variableRespu => {
          Swal.fire({                                                                                  
          title: this.clienteModel.nombre,                                                                     
          text: 'Se actualizó correctamente',                                                              
          // icon: 'success'
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/peluqueria-pruden.appspot.com/o/logo%2FLOGO.png?alt=media&token=4cc31d20-e1a8-4cba-a8de-d77234845efb'                                                                                  
          });
        });
    }else{
      variablePeticion = this.servicio.crearCliente(this.clienteModel);                                
      variablePeticion.subscribe( variableRespu => {                                               
          Swal.fire({
          title: this.clienteModel.nombre,
          text: 'Se guardó correctamente',
          // icon: 'success'
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/peluqueria-pruden.appspot.com/o/logo%2FLOGO.png?alt=media&token=4cc31d20-e1a8-4cba-a8de-d77234845efb'
          });
      });
    }

  }
  
      salir(){                             
      this.servicefire.logout();               
      this.router.navigateByUrl('/home');     
    }
  
  ngOnInit() {
    const variable_Id = this.Route.snapshot.paramMap.get('id');          
    console.log(variable_Id);

    if ( variable_Id !== 'nuevo' ){                                          
    this.servicio.getUnElemento(variable_Id).subscribe( (variable_respuesta: ClienteModel) => {     
        console.log(variable_respuesta);

        this.clienteModel = variable_respuesta;                                       
        this.clienteModel.id = variable_Id;                                       
      });
      }
  }

}
