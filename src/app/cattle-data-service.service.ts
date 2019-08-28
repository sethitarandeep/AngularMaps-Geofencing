import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { FarmCattle } from './farm-cattle';

@Injectable({
  providedIn: 'root'
})
export class CattleDataServiceService {
  dataSourceUrl = './assets/dataSource.json';

  constructor(private http: HttpClient) {
    this.getData().subscribe(data => {

    });
  }
    public getData(): Observable<FarmCattle[]> {
      // @ts-ignore
      return this.http.get<FarmCattle[]>(this.dataSourceUrl);
  }

}
