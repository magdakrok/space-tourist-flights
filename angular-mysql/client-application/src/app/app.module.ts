import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NagivateComponent } from './components/navigate/nagivate.component';
import { FlightComponent } from './components/flight/flight-add/flight.component';
import { FlightListComponent } from './components/flight/flight-list/flight-list.component';
import {FlightService} from './service/flight.service';
import {FormsModule} from '@angular/forms';
import { TouristAddComponent } from './components/tourist/tourist-add/tourist.component';
import { TouristListComponent } from './components/tourist/tourist-list/tourist-list.component';
import { TouristService } from './service/tourist.service';
import { ConnectionsService} from './service/connectionsService';
import {ConnectionsTablesComponent} from './components/connection-tables/connection-add-to-flight/connection-tables.component';
import { ConnectionDeleteComponent } from './components/connection-tables/connection-delete/connection-delete.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations:[
    AppComponent,
  NagivateComponent,
  FlightComponent,
    FlightListComponent,
    TouristAddComponent,
    TouristListComponent,
    ConnectionsTablesComponent,
    ConnectionDeleteComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FlightService,
    TouristService,
    ConnectionsService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
