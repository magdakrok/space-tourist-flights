
import { Component, OnInit, HostBinding } from '@angular/core';
import { ReservationService } from 'src/app/service/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  reser: any = [];

  flight: Flight = {
    departure_date: new Date,
    arrival_date: new Date,
    number_of_seats: 0,
    ticket_price: 0,
  };

  constructor(private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: MessageService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    console.log(params);
    if (params.departure_date && params.arrival_date) {
      this.reservationService.getReservation(params.departure_date, params.arrival_date)
        .subscribe(
          res => {
            this.reser = res;
            

            if (res == 0) {
              this.message.error("Please select date");
              this.router.navigate([`/`]);
            }
          },
          err => {
            this.message.error("Something went wrong, please try again");
           })
    }
  }
}


