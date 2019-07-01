import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/English/navigation/navigation.component';
import { NavegacionComponent } from './components/Spanish/navegacion/navegacion.component';
import { StartComponent } from './components/English/start/start.component';
import { InicioComponent } from './components/Spanish/inicio/inicio.component';
import  { TeamComponent} from './components/English/team/team.component';
import { EquipoComponent } from './components/Spanish/equipo/equipo.component'; 
import { StatisticsComponent } from './components/English/statistics/statistics.component';
import { EstadisticasComponent } from './components/Spanish/estadisticas/estadisticas.component';
import { DocumentationComponent } from './components/documentation/documentation.component';


import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import { BooksComponent } from './components/documentation/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StartComponent,
    InicioComponent,
    NavegacionComponent,
    TeamComponent,
    EquipoComponent,
    StatisticsComponent,
    EstadisticasComponent,
    DocumentationComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
