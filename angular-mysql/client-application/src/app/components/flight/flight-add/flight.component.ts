import { Component, OnInit, HostBinding } from '@angular/core';
import { Flight } from '../../../models/flight';
import { FlightService } from '../../../service/flight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';


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
  constructor(private flightService: FlightService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: MessageService) { 

    }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id_flight) {
      this.flightService.getFly(params.id_flight).subscribe(
        res => {
          this.flight == res;
          // console.log(res),
          this.edit = true;
        },
        err => {
          return console.error(err);
        })
    }
  }

  saveNewFlight() {
    delete this.flight.departure_date;
    delete this.flight.arrival_date;
    this.flightService.saveFlight(this.flight)
      .subscribe(
        res => {
          // console.log(res),
          this.message.success("save succesfull"),
            // this.flightService.getFlys();
            this.router.navigate([`/flys`]);
        },
        err => {
          console.error(err),
            this.message.error("Something is wrong, please try again");
        })
  }


  updateFlight() {
    delete this.flight.departure_date;
    delete this.flight.arrival_date;
    this.flightService.updateFlight(this.flight.id_flight, this.flight).subscribe(
      res => {
        //console.log(res);
        this.message.success("Update succesfull")
      },
      err => {
        console.error(err),
          this.message.error("Something is wrong, please try again");
      })
  }
}
