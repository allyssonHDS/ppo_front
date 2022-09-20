import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent } from './dashboard/dashboard.component';

import { PagIniComponent } from './pag-ini/pag-ini.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'pag-ini', pathMatch: 'full' },
  { path: '', component: PagIniComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
