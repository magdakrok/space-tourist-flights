import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/service/flight.service';
import { TouristService } from 'src/app/service/tourist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionsService } from 'src/app/service/connectionsService';
import { Connections } from 'src/app/models/connections';
import { Tourist } from 'src/app/models/tourist';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.css']
})
export class ReservationAddComponent implements OnInit {

  tourist_id: any = [];
  tourist: any = [];
  flight: any = [];
  show: boolean = false;
  
 
  param: any =[];

  connections: Connections = {
    id_connections: 0,
    id_tourist: 0,
    id_flight: 0,
  };

  constructor(private flightService: FlightService,
    private connectionService: ConnectionsService,
    private touristService: TouristService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private message: MessageService) { }

    departure_date: Date;
    arrival_date: Date;
    id_flight: number;
    id_tourist: number;

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    this.id_flight = params.id_flight;
    this.id_tourist = params.id_tourist;
    if (params.id_flight) {
      this.flightService.getFly(params.id_flight).subscribe(
        res => {
          this.flight = res;
          // console.log(res);
          
        },
        err => {
          this.message.error("Something wrong, please try again");
          console.log(err)
        }
      )
    }

    if(params.id_tourist){
      this.touristService.getTourist(params.id_tourist).subscribe(
        res => {
          this.tourist = res;
          // console.log(res);
          this.toggle();
        },
        err => {
          this.message.error("Something wrong, please try again");
          console.log(err)
        }
      )
    }
  }

  getTouristName(first_name: string, last_name: string) {
    this.touristService.getTouristName(first_name, last_name).subscribe(
      res => {
        this.tourist = res;
        
        console.log(res);
        if (res == 0) {
          this.message.success("You are new tourist, please sign up")
          this.router.navigate([`/tourists/add`, this.id_flight]);
        }
        this.toggle();
        
      },
      err => {
        this.message.error("Something wrong, please try again");
        console.log(err)
      }
    )
  }

  bookReservation(id_tourist: number) {
    const params = this.activatedRoute.snapshot.params;

    for (let id of this.tourist) {
      this.connections.id_tourist = id.id_tourist;
    }
    this.connections.id_flight = params.id_flight;
    this.connectionService.saveConnection(this.connections)
      .subscribe(
        res => {
          //console.log(res),
          this.message.success("The flight is booking");
        },
        err => {
          this.message.error("Something wrong, please try again");
          console.log(err)
        });
      }

  toggle() {
    this.show = !this.show;
  }
}
