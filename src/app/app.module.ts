import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PieComponent } from './componentes/pie/pie.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PreciosComponent } from './paginas/precios/precios.component';
import { CitasComponent } from './paginas/citas/citas.component';
import { MapaComponent } from './paginas/mapa/mapa.component';
import { HorariosComponent } from './paginas/horarios/horarios.component';
import { LoginComponent } from './componentes/login/login.component';

import { AdministradorComponent } from './componentes/login/administrador/administrador.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VercitasComponent } from './paginas/administrador/vercitas/vercitas.component';
import { PedircitasComponent } from './paginas/administrador/pedircitas/pedircitas.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    PieComponent,
    CabeceraComponent,
    PreciosComponent,
    CitasComponent,
    MapaComponent,
    HorariosComponent,
    LoginComponent,
    AdministradorComponent,
    VercitasComponent,
    PedircitasComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
