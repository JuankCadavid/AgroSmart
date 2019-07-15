import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef, MapServiceFactory, BingMapServiceFactory } from "angular-maps";




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/English/navigation/navigation.component';
import { NavegacionComponent } from './components/Spanish/navegacion/navegacion.component';
import { StartComponent } from './components/English/start/start.component';
import { InicioComponent } from './components/Spanish/inicio/inicio.component';
import { TeamComponent } from './components/English/team/team.component';
import { EquipoComponent } from './components/Spanish/equipo/equipo.component';
import { StatisticsComponent } from './components/English/statistics/statistics.component';
import { EstadisticasComponent } from './components/Spanish/estadisticas/estadisticas.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { BooksComponent } from './components/documentation/books/books.component';
import { PresentationComponent } from './components/documentation/presentation/presentation.component';
import { VideoComponent } from './components/documentation/video/video.component';
import { ProjectsComponent } from './components/English/projects/projects.component';
import { ProyectosComponent } from './components/Spanish/proyectos/proyectos.component';
import { CertificacionesComponent } from './components/Spanish/certificaciones/certificaciones.component';
import { ReqprocolombiaComponent } from './components/Spanish/certificaciones/reqprocolombia/reqprocolombia.component';
import { CertificationsComponent } from './components/English/certifications/certifications.component';





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
    BooksComponent,
    PresentationComponent,
    VideoComponent,
    ProjectsComponent,
    ProyectosComponent,
    CertificacionesComponent,
    ReqprocolombiaComponent,
    CertificationsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    MenuModule,
    ButtonModule,
    MapModule.forRootBing()
  ],
  providers: [{
    provide: MapAPILoader, deps: [], useFactory: BingMapServiceProviderFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function BingMapServiceProviderFactory() {
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = "AjMuW1Bsot6rHL73Scx3spkgvhOV0mOzDYuiKL-7-5UY-wHeHFPmjeLlOuPdGYWQ ";
  bc.branch = "experimental";
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
