import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../../../../paginas/citas/models/cliente.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitasservicioadService {

  private url = 'https://peluqueria-pruden.firebaseio.com/';

  constructor( private http: HttpClient ) { }

  getTodosElementos(){                                                     
  
    return this.http.get(`${ this.url }/clientes.json`).pipe( map( this.variableCrearArreglo 
    ));
  }
  private variableCrearArreglo ( MuestraToditos: object ){                  
  
  const mostrarTodos: ClienteModel[] = [];                                     
  console.log(MuestraToditos);
  
  if ( MuestraToditos === null ) {                                        
    return [];
  }
  
  Object.keys( MuestraToditos ).forEach( variableKeyID => {               
  const variableObjetoHeroe: ClienteModel = MuestraToditos[variableKeyID];
  variableObjetoHeroe.id = variableKeyID;                                     
  
  mostrarTodos.push( variableObjetoHeroe );
  } );
  
    return mostrarTodos;                                                   
  }

  borrarElemento( id: string ){                                              

    return this.http.delete(`${ this.url }/clientes/${ id }.json`);   
  }
}
