import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'src/app/models/menuitem'
import { defer } from 'q';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  items: MenuItem[];
  visibleSidebar1= true;

  constructor() { }

  ngOnInit() {

    this.items = [
            {
                label: 'Cultivo',
                icon: 'pi pi-pw pi-file',
                items: [
                    {
                        label: 'Presentacion', 
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {label: 'Libros', icon: 'pi pi-fw pi-user-plus'},
                            {label: 'Videos', icon: 'pi-video'}
                        ],
                        routerLink:'presentation'
                        
                    },                   
                    {
                        label: 'Libros', 
                        icon: 'pi pi-fw pi-file',
                        items: [
                            {label: 'Libros', icon: 'pi pi-fw pi-user-plus'},
                            {label: 'Videos', icon: 'pi pi-fw pi-video'}
                        ],
                        routerLink:'books'
                        
                    },
                    {label: 'Videos', icon: 'pi pi-fw pi-video',  routerLink:'video'},
                    {separator: true},
                    {label: 'Quit', icon: 'pi pi-fw pi-times'}
                ],
              
            },
            {
                label: 'Certificación',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
                label: 'Educación',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search', 
                        icon: 'pi pi-pi pi-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                    ]}
                ]
            },
            {
                label: 'Aplicaciones',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {label: 'Save', icon: 'pi pi-fw pi-save'},
                            {label: 'Update', icon: 'pi pi-fw pi-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                        ]
                    }
                ]
            }
        ];


}

}
