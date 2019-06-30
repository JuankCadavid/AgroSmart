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
      const myroute = prueba[0].path;
      if (myroute == 'team') {
        this.router.navigateByUrl("/equipo");
      }
      else if (myroute == 'start') {
        this.router.navigateByUrl("/inicio");
      }
      else {
        this.router.navigateByUrl("/start");
      }

      if (myroute == 'statistics') {
        this.router.navigateByUrl("/estadisticas");
      }
      else if (myroute == 'start') {
        this.router.navigateByUrl("/inicio");
      }
      else {
        this.router.navigateByUrl("/start");
      }
    });

  }

}
