import { Component, OnInit, HostBinding } from '@angular/core';
import { ConnectionsService } from 'src/app/service/connectionsService';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/service/flight.service';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  reservation: any =[];
  connect2: any =[];

  flightt: Flight = {
    departure_date: new Date,
    arrival_date: new Date,
    number_of_seats: 0,
    ticket_price: 0,
  };

  @HostBinding('class') classes = 'row';

  edit: boolean = false;
  constructor(private flight: FlightService,private connectionsService: ConnectionsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   // this.getReservation();
   // this.getFlight();
  }

  getFlight() {


    this.flight.getFlys().subscribe(
      res => {
        this.connect2 = res;
        console.log(res);
      },
      err => {
        return console.error(err);
      })
  }


  getReservation(){
    this.connectionsService.getData().subscribe(
    res3 => {
      this.reservation = res3;
      console.log(res3);
    }, 
    err => {
      return console.error(err);
    })
  }



}
