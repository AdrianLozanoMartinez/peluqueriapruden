import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './paginas/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PieComponent } from './componentes/pie/pie.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PreciosComponent } from './paginas/precios/precios.component';
import { CitasComponent } from './paginas/citas/citas.component';
import { MapaComponent } from './paginas/mapa/mapa.component';
import { LoginComponent } from './componentes/login/login.component';

import { AdministradorComponent } from './componentes/login/administrador/administrador.component';

import { LoginguardGuard } from './componentes/login/guard/loginguard.guard'; 

import { HorariosComponent } from './paginas/horarios/horarios.component';
import { VercitasComponent } from './paginas/administrador/vercitas/vercitas.component';
import { PedircitasComponent } from './paginas/administrador/pedircitas/pedircitas.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },                                   
  { path: 'home', component: HomeComponent},                   
  { path: 'pie', component: PieComponent},                       
  { path: 'cabecera', component: CabeceraComponent},             
  { path: 'appcomponente', component: AppComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administrador', component: AdministradorComponent, canActivate: [LoginguardGuard]}, 
  { path: 'pedir/:id', component: PedircitasComponent, canActivate: [LoginguardGuard] },
  { path: 'ver', component: VercitasComponent, canActivate: [LoginguardGuard] },
  { path: 'horarios', component: HorariosComponent },
  { path: '**', component: ErrorComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);