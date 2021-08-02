import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Swal.fire({
      title : '<h1>¡¡¡En construcción!!!</h1>',
      text: 'Disculpen las molestias',
      icon: 'warning', 
      iconHtml: '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>',
      showConfirmButton: false,
      // background: 'black',
    })
  }

}
