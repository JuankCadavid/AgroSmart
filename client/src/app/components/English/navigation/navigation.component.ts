import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router,
    private ar: ActivatedRoute) { }

  ngOnInit() {
  }

  getCurrentRoute() {

    this.ar.url.subscribe(prueba => {
      const myroutePpal = prueba[0].path;
      const myrouteSec = prueba[1].path;
      const myFinalRoute = myroutePpal + '/' + myrouteSec;
    
      if (myFinalRoute == 'English/team') {
        this.router.navigateByUrl("Spanish/equipo");
      }
      else if (myFinalRoute == 'English/start') {
        this.router.navigateByUrl("Spanish/inicio");
      } else if (myFinalRoute == 'English/statistics') {
        this.router.navigateByUrl("Spanish/estadisticas");
      } else if (myFinalRoute == 'English/projects') {
        this.router.navigateByUrl("Spanish/proyectos");
      }
      else if(myFinalRoute == 'English/certifications'){
        this.router.navigateByUrl("Spanish/certificaciones");
      }
      else {
        this.router.navigateByUrl("English/start");
      }


    });

  }

}
