import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menuitem';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {

  items: MenuItem[];
  visibleSidebar1=true;

  constructor() { }

  ngOnInit() {

  }

  



}
