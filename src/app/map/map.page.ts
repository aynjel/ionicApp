import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // set the map's initial perspective with CameraOptions
    const map = new Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.5804, 45.53483],
      pitch: 60,
      bearing: -60,
      zoom: 10
    });
  }
}
