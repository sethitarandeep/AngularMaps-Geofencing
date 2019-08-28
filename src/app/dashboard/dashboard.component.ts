import {Component, OnInit, ViewChild} from '@angular/core';
import { MouseEvent } from '@agm/core';
import {Marker} from '../marker';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // google maps zoom level
  zoom: number = 13;
  markers: any[];
  displayedColumns: string[] = ['cattleId', 'status', 'description', 'coordinates'];
  dataSource: MatTableDataSource<Marker>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // initial center position for the map
  lat: number = -27.8161;
  lng: number = 152.3690;
  constructor(private httpService: HttpClient) {}

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
          this.dataSource = new MatTableDataSource<Marker>(this.markers);
          this.dataSource.paginator = this.paginator;
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

  /*markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ];*/

}

