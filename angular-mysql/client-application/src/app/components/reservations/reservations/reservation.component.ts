
  import { Component, OnInit, HostBinding } from '@angular/core';
import { ReservationService } from 'src/app/service/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { createNgModule } from '@angular/compiler/src/core';

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
  constructor(private reservationService: ReservationService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    console.log(params);
    if (params.departure_date && params.arrival_date) {
    this.reservationService.getReservation(params.departure_date, params.arrival_date)
    .subscribe(
      res => {
         this.reser = res;
         console.log(res);

         if(res == 0){
          this.router.navigate([`/`]);
         }
            
        },
        err => {
          return console.error(err);
        }
      )
   }

   //console.log(this.reser);
    
  }

  

 
}

