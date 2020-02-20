import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../service/flight.service';
import { Flight } from '../../../models/flight';
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
      //  console.log(res)
      },
      err =>{ 
        console.log(err);
        this.message.error("Something wrong, please try again");
      }
    );
  }
  
  deleteFlight(id_flight: string) {
    this.flightsService.deleteFly(id_flight).subscribe(
      res => {
        //console.log(res);
        this.getFlights();
        this.message.success("Delete succesfull");
      },
      err =>{
        this.message.error("Something wrong, please try again");
      console.log(err)
    }
    )
  }
}
