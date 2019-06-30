import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TeamComponent } from 'src/app/components/team/team.component';
import { EquipoComponent } from 'src/app/components/equipo/equipo.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path:'start',
    component:StartComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'equipo',
    component:EquipoComponent
  },
  {
    path:'statistics',
    component:StatisticsComponent
  },
  {
    path:'estadisticas',
    component:EstadisticasComponent
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
