import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StartComponent } from './components/start/start.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StartComponent,
    InicioComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
