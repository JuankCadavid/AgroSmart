import { Component, OnInit } from '@angular/core';
import {
  MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo
} from 'angular-maps';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  checked: boolean = true;

  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    zoom: 8
  };

  _box: IBox = {
    maxLatitude: 3,
    maxLongitude: -70,
    minLatitude: 3,
    minLongitude: -85
  };

  _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.DynmaicCircleMarker,
    size: { width: 60, height: 60 },
    color: 'rgba(97,205,196,0.7)',
    markerOffsetRatio: { x: 0.5, y: 0.5 },
  };


  _iconInfoGuapi: IMarkerIconInfo = {
    markerType: MarkerTypeId.DynmaicCircleMarker,
    size: { width: 40, height: 40 },
    color: 'rgba(97,205,196,0.7)',
    markerOffsetRatio: { x: 0.5, y: 0.5 },
  };

  _iconInfoTimbiqui: IMarkerIconInfo = {
    markerType: MarkerTypeId.DynmaicCircleMarker,
    size: { width: 40, height: 40 },
    color: 'rgba(97,205,196,0.7)',
    markerOffsetRatio: { x: 0.5, y: 0.5 },

  };

  _iconInfoTumaco: IMarkerIconInfo = {
    markerType: MarkerTypeId.DynmaicCircleMarker,
    size: { width: 40, height: 40 },
    color: 'rgba(97,205,196,0.7)',
    markerOffsetRatio: { x: 0.5, y: 0.5 },
  };

  _iconIscuande: IMarkerIconInfo = {
    markerType: MarkerTypeId.DynmaicCircleMarker,
    size: { width: 30, height: 30 },
    color: 'rgba(97,205,196,0.7)',
    markerOffsetRatio: { x: 0.5, y: 0.5 },
  };



  _iconInfoBuenaventura: IMarkerIconInfo = {
    markerType: MarkerTypeId.DynmaicCircleMarker,
    size: { width: 40, height: 40 },
    color: 'rgba(97,205,196,0.7)',
    markerOffsetRatio: { x: 0.5, y: 0.5 },
  };
  constructor() { }

  ngOnInit() {
  }

  _click() {
    console.log("hello world...");
  }

}
