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
import { ReservationComponent } from './components/reservations/reservations/reservation.component';
import { ReservationService } from './service/reservation.service';
import { ReservationAddComponent } from './components/reservations/reservation-add/reservation-add.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';


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
    ReservationComponent,
    ReservationAddComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({})
    
  ],
  providers: [
    FlightService,
    TouristService,
    ConnectionsService,
    ReservationService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
