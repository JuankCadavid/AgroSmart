import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
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
import { CertificationsComponent } from 'src/app/components/English/certifications/certifications.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/English/start',
    pathMatch: 'full'
  },
  {
    path: 'English/start',
    component: StartComponent
  },
  {
    path: 'Spanish/inicio',
    component: InicioComponent
  },
  {
    path: 'English/team',
    component: TeamComponent
  },
  {
    path: 'Spanish/equipo',
    component: EquipoComponent
  },
  {
    path: 'English/projects',
    component: ProjectsComponent
  },
  {
    path: 'Spanish/proyectos',
    component: ProyectosComponent
  },
  {
    path: 'English/statistics',
    component: StatisticsComponent
  },
  {
    path: 'Spanish/estadisticas',
    component: EstadisticasComponent
  },
  {
    path: 'English/documentation',
    component: DocumentationComponent,
    children: [
      {
        path: 'presentation',
        component: PresentationComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'video',
        component: VideoComponent
      }
    ]
  },
  
  {
    path: 'Spanish/certificaciones',
    component: CertificacionesComponent
  },
  {
    path: 'English/certifications',
    component: CertificationsComponent
  }


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
