import { Component, OnInit, ElementRef } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }


}
