import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { PagIniComponent } from './auth/pag-ini/pag-ini.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'pag-ini', pathMatch: 'full' },
  { path: '', component: PagIniComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
