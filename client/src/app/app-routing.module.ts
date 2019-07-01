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
    path: 'English/statistics',
    component: StatisticsComponent
  },
  {
    path: 'Spanish/estadisticas',
    component: EstadisticasComponent
  },
  {
    path: 'English/documentation',
    component: DocumentationComponent
  },
  {
    path: 'books',
    component: BooksComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
