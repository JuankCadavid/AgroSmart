import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";


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

  getCurrentRoute(){

    this.ar.url.subscribe(prueba =>{
      const myroute = prueba[0].path;
      if(myroute == 'equipo'){
        this.router.navigateByUrl("/team");
      }
      else if(myroute == 'inicio'){
        this.router.navigateByUrl("/start");
      }else if (myroute == 'statistics') {
        this.router.navigateByUrl("/estadisticas");
      } 
      else{
        this.router.navigateByUrl("/inicio");
      }

    
 
    });
   
  }

}
