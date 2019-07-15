import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private router: Router,
    private ar: ActivatedRoute) { }

  ngOnInit() {
  }

  getCurrentRoute() {

    this.ar.url.subscribe(prueba => {
      const myroutePpal = prueba[0].path;
      const myrouteSec = prueba[1].path;
      const myFinalRoute = myroutePpal + '/' + myrouteSec;

      if (myFinalRoute == 'Spanish/equipo') {
        this.router.navigateByUrl("English/team");
      }
      else if (myFinalRoute == 'Spanish/inicio') {
        this.router.navigateByUrl("English/start");
      } else if (myFinalRoute == 'Spanish/estadisticas') {
        this.router.navigateByUrl("English/statistics");
      } else if (myFinalRoute == 'Spanish/proyectos') {
        this.router.navigateByUrl("English/projects");
      }
      else if (myFinalRoute == 'Spanish/certificaciones') {
        this.router.navigateByUrl("English/certifications");
      }
      else {
        this.router.navigateByUrl("Spanish/inicio");
      }



    });

  }

}
