import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../../../../paginas/citas/models/cliente.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioadministradorService {

  private url = 'https://peluqueria-pruden.firebaseio.com/';

  constructor(private http: HttpClient) { }


  crearCliente ( nuevoCliente: ClienteModel ){                   
    return this.http.post(`${ this.url }/clientes.json`, nuevoCliente).pipe(    
        map( ( respuesta: any ) => {                    
          nuevoCliente.id = respuesta.name;               
            return nuevoCliente;                             
        })
      );
  }

  actualizarCliente( actualizarcliente: ClienteModel ){                                              

    const id = {                                                                   
        ...actualizarcliente
      };
  
      delete id.id;                                                                       
  
      return this.http.put(`${ this.url }/clientes/${ actualizarcliente.id }.json`, id)         
  }

  getTodosElementos(){                                                     
  
    return this.http.get(`${ this.url }/clientes.json`).pipe( map( this.variableCrearArreglo 
    ));
  }

  private variableCrearArreglo ( variableObjeto: object ){                  
  
  const variableConst: ClienteModel[] = [];                                    
  console.log(variableObjeto);
  
  if ( variableObjeto === null ) {                                      
    return [];
  }
  
  Object.keys( variableObjeto ).forEach( variableKeyID => {               
  const variableObjetoHeroe: ClienteModel = variableObjeto[variableKeyID];
  variableObjetoHeroe.id = variableKeyID;                                    
  
  variableConst.push( variableObjetoHeroe );
  } );
  
    return variableConst;                                                     
  }
  
getUnElemento(variableID:string){                                                       
  return this.http.get(`${ this.url }/clientes/${ variableID }.json`); 
}









}