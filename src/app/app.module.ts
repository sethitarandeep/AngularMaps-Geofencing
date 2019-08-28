import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule, MatIconModule, MatPaginatorModule, MatTableModule, MatTabsModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import {CattleDataServiceService} from './cattle-data-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CattleMapComponent } from './cattle-map/cattle-map.component';
import { CattleListComponent } from './cattle-list/cattle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CattleMapComponent,
    CattleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1RM4aCHu8LJ_wlAR6Sm1LJRFfg5oNraI'
    }),
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    CattleDataServiceService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
