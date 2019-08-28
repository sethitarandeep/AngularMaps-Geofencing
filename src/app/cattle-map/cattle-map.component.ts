import { Component, OnInit } from '@angular/core';
import {Marker} from '../marker';
import {MouseEvent} from '@agm/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cattle-map',
  templateUrl: './cattle-map.component.html',
  styleUrls: ['./cattle-map.component.css']
})
export class CattleMapComponent implements OnInit {
  // google maps zoom level
  zoom: number = 13;

  // initial center position for the map
  lat: number = -27.8161;
  lng: number = 152.3690;
  constructor(private httpService: HttpClient) { }
  markers: any[];
  restriction: {
    latLngBounds: {
      west: 113.338953078, south: -43.6345972634, east: 153.569469029, north: -10.6681857235
    },
    strictBounds: false,
  }
  ngOnInit() {
    this.getCattleData();
  }
  getCattleData() {
    this.httpService.get('./assets/dataSource.json').subscribe(data => {
      console.log('Data=======>>>>', data);
      this.markers = data as Marker[];
    });
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    /*this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });*/
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


}
