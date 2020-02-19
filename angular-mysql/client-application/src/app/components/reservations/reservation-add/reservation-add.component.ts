import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/service/flight.service';
import { TouristService } from 'src/app/service/tourist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.css']
})
export class ReservationAddComponent implements OnInit {

  tourist: any =[];
  flight: any=[];
  show: boolean= false;

  constructor(private flightService: FlightService, private touristService: TouristService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    if (params.id_flight) {
      this.flightService.getFly(params.id_flight).subscribe(
        res => {
          this.flight = res;
          console.log(res);
           
        },
        err => {
          return console.error(err);
        }
      )
    }
    
  }

  getTouristName(first_name: string, last_name: string){
    this.touristService.getTouristName(first_name, last_name).subscribe(
      res => {
       // this.edit = true,
          this.tourist = res;
        console.log(res);
        // this.edit = true;
        this.toggle();
      },
      err => {
        return console.error(err);
      }
    )
  }

  toggle(){
    this.show = !this.show;
  }

}
