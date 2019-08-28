import {Component, OnInit, ViewChild} from '@angular/core';
import { MouseEvent } from '@agm/core';
import {Marker} from '../marker';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
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
  @ViewChild(MatSort, {static: true}) sort: MatSort;
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
  togglePaddock = false;
  ngOnInit() {
    this.getCattleData();
  }
  getCattleData() {
      this.httpService.get('./assets/dataSource.json').subscribe(data => {
        this.markers = data as Marker[];
        this.dataSource = new MatTableDataSource<Marker>(this.markers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
     });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editPaddock() {
    this.togglePaddock = !this.togglePaddock;
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

