import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../model/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosusuarioService {  

private url = 'https://identitytoolkit.googleapis.com/v1/accounts:sign';
private apikey = 'AIzaSyC-4sa7toORC1OWXGwb5BV7xAehTZl_8-o';                 

usartoken: string;

  constructor( private http: HttpClient ) { 
    this.leertoken(); 
  }

  login (usuario: UsuarioModel){

    const variable_login = {                     
        ...usuario,
        returnSecureToken: true
      };
    
    return this.http.post(this.url + 'InWithPassword?key=' + this.apikey, variable_login).pipe(map( resp => {       
      // console.log ('Entro en el mapa del RXJS');                                                                       
      this.guardartoken( resp['idToken'] );                                                                            
      return resp;
        })
        );   

    }

    logout(){
      localStorage.removeItem('token');                                   
    }
    
    private guardartoken (idToken: string){                            
      this.usartoken = idToken;
        localStorage.setItem('token', idToken);                                 
      
      let hoy = new Date();                                                  
      hoy.setSeconds( 3600 );                                                 
      localStorage.setItem('variableExpira', hoy.getTime().toString() );      
      }
      
      leertoken(){
        if (localStorage.getItem('token')){
          this.usartoken=localStorage.getItem('token');                         
          }else{
          this.usartoken='';                                                    
          }
        return this.usartoken;
        }

        guardEstaAutentificado(): boolean{                                 
          if ( this.usartoken.length < 2 ){                               
            return false;
          }
        
          const variableExpira = Number (localStorage.getItem('variableExpira'));     
          const variableExpira2 = new Date();                                         
            variableExpira2.setTime(variableExpira);                                   
        
              if ( variableExpira2 > new Date() ){                                   
                return true;                                                            
                  }else{
              return false;                                                           
            }
        }

}
