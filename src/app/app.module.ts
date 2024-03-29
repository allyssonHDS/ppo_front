import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular materia */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/*Componetes  */

import { PagIniComponent } from './pag-ini/pag-ini.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { BrokerComponent } from './broker/broker.component';
import { CanalComponent } from './canal/canal.component';
import { DispositivoComponent } from './dispositivo/dispositivo.component';
import { GrupoComponent } from './grupo/grupo.component';
import { HistoricoComponent } from './historico/historico.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagIniComponent,
    LoginComponent,
    RegistrarComponent,
    BrokerComponent,
    CanalComponent,
    DispositivoComponent,
    GrupoComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
