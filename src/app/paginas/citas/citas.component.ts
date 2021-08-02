import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { CitasservicioadService } from '../administrador/vercitas/servicio/citasservicioad.service';
import { ClienteModel } from '../../paginas/citas/models/cliente.model';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  verCitas: ClienteModel[] = [];

  constructor(  private servicio: CitasservicioadService ) { }

  ngOnInit() {
    this.servicio.getTodosElementos().subscribe( respuesta => {     
      console.log(respuesta);
      this.verCitas = respuesta;                                                 
    });
  }

}
