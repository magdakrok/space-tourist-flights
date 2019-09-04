import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../service/flight.service';
import { Flight } from '../../../models/flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flight: any = [];
  constructor(private flightsService: FlightService) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.flightsService.getFlys().subscribe(
      res => {
        this.flight = res;
        console.log(res)
      },
      err => console.log(err)
    );
  }
  
  deleteFlight(id_flight: string) {
    this.flightsService.deleteFly(id_flight).subscribe(
      res => {
        console.log(res);
        this.getFlights();
      },
      err => console.log(err)
    )
  }
}
