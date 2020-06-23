import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightListComponent} from './components/flight/flight-list/flight-list.component';
import {FlightComponent} from './components/flight/flight-add/flight.component';
import {TouristListComponent} from './components/tourist/tourist-list/tourist-list.component';
import {TouristAddComponent} from './components/tourist/tourist-add/tourist.component';
import {ConnectionsTablesComponent} from './components/connection-tables/connection-add-to-flight/connection-tables.component'
import {ConnectionDeleteComponent} from './components/connection-tables/connection-delete/connection-delete.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReservationComponent } from './components/reservations/reservations/reservation.component';
import { ReservationAddComponent } from './components/reservations/reservation-add/reservation-add.component';


const routes: Routes = [
 
  {
    path: "",
    component: HomePageComponent
  },

  
  {
    path: "home",
    component: HomePageComponent
  },

  {
    path: "reservation/:departure_date/:arrival_date",
    component: ReservationComponent
  },

  {
    path: "reservation/:departure_date/:arrival_date/add/:id_flight",
    component: ReservationAddComponent
  },

  {
    path: "reservation/add/:id_flight/:id_tourist",
   component: ReservationAddComponent
  },
  {
    path: 'flys',
    component: FlightListComponent
  },
  {
   path: 'flys/add',
   component: FlightComponent
  },
  {
    path: 'flys/edit/:id_flight',
    component: FlightComponent
  },
  {
    path: 'tourists',
    component: TouristListComponent
  },
  {
   path: 'tourists/add',
   component: TouristAddComponent
  },

 
  {
    path: 'tourists/add/:id_flight',
    component: TouristAddComponent
   },
  
  {
    path: 'tourists/editTourist/:id_tourist',
    component: TouristAddComponent
  },
  
  {
    path: 'tourists/listFlys/:id_tourist',
    component: ConnectionsTablesComponent
  },{
    path: 'connection/addData',
    component: ConnectionsTablesComponent
  },
  {
    path: 'connection',
    component: ConnectionDeleteComponent
  },
  {
    path: 'flys/listTourist/:id_flight',
    component: ConnectionsTablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
