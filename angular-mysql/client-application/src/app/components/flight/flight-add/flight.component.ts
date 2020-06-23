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
  fly: boolean = false;
  loading: boolean = false;
  numberFly: any = [];

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
          this.edit = true;
        },
        err => {
          return console.error(err);
        })
    }
  }

  saveNewFlight() {
    this.loading = true;
    const departure_date = this.flight.departure_date;
    const arrival_date = this.flight.arrival_date;

    this.flightService.checkFly(departure_date, arrival_date)
      .subscribe(
        res => {
          console.log(res);
          if (res == 0) {
            this.fly = false;
          }
          else {
            this.fly = true;
          }
        },
        err => {
          return console.error(err);
        });

    setTimeout(() => {
      if (this.fly === false) {

        this.flightService.saveFlight(this.flight)
          .subscribe(
            res => {
              console.log(res);
              this.message.success("saved");
              this.router.navigate([`/flys`]);
            },
            err => {
              console.error(err),
                this.message.error("Something went wrong, please try again");
            })
      }
      else {
        this.message.error("This flight exists in the database");
      }

      this.loading = false;
    }, 3000);
}


  updateFlight() {
    delete this.flight.departure_date;
    delete this.flight.arrival_date;
    this.flightService.updateFlight(this.flight.id_flight, this.flight).subscribe(
      res => {
      this.message.success("Updated")
      },
      err => {
        console.error(err),
          this.message.error("Something went wrong, please try again");
      })
  }
}
