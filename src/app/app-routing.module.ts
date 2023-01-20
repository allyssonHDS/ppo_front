import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent } from './dashboard/dashboard.component';

import { PagIniComponent } from './pag-ini/pag-ini.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrokerComponent } from './broker/broker.component';
import { CanalComponent } from './canal/canal.component';
import { DispositivoComponent } from './dispositivo/dispositivo.component';
import { GrupoComponent } from './grupo/grupo.component';
import { HistoricoComponent } from './historico/historico.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {path: '', redirectTo: 'pag-ini', pathMatch:'full'},
  {path: '', component: PagIniComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component:RegistrarComponent},
  {path: 'broker', component:BrokerComponent},
  {path: 'canal', component:CanalComponent},
  {path: 'dispositivo', component:DispositivoComponent},
  {path: 'grupo', component:GrupoComponent},
  {path: 'historico', component:HistoricoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
