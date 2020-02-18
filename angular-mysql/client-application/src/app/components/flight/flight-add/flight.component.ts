import { Component, OnInit, HostBinding } from '@angular/core';
import { Flight } from '../../../models/flight';
import { FlightService } from '../../../service/flight.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Time } from '@angular/common';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  flight: Flight = {
    departure_date: new Date,
   
    arrival_date: new Date,
    
    number_of_seats: 0,
    ticket_price: 0,
  };

  edit: boolean = false;
  constructor(private flightService: FlightService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id_flight) {
      this.flightService.getFly(params.id_flight).subscribe(
        res => {
          this.flight == res;
          console.log(res),
            this.edit = true;
        },
        err => {
          return console.error(err);
        }
      )
    }
  }

  saveNewFlight() {

    delete this.flight.departure_date;
    delete this.flight.arrival_date;
    this.flightService.saveFlight(this.flight)
      .subscribe(
        res => {
          console.log(res),
            console.log("save successed"),
            this.flightService.getFlys();
          this.router.navigate([`/flys`]);
        },
        err => console.error(err)
      );
  }

  updateFlight() {
    delete this.flight.departure_date;
    delete this.flight.arrival_date;
    this.flightService.updateFlight(this.flight.id_flight, this.flight).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)

    )
  }
}
