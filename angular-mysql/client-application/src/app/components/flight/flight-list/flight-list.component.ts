import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../service/flight.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flight: any = [];
  constructor(private flightsService: FlightService,
  private message: MessageService) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.flightsService.getFlys().subscribe(
      res => {
        this.flight = res;
       },
      err => {
        this.message.error("Something went wrong, please try again");
      }
    );
  }

  deleteFlight(id_flight: string) {
    this.flightsService.deleteFly(id_flight).subscribe(
      res => {
        this.getFlights();
        this.message.success("Deleted");
      },
      err => {
        this.message.error("Something went wrong, please try again");
        
      }
    )
  }
}
