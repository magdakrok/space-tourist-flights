import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/service/flight.service';
import { TouristService } from 'src/app/service/tourist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionsService } from 'src/app/service/connectionsService';
import { Connections } from 'src/app/models/connections';
import { Tourist } from 'src/app/models/tourist';
import { MessageService } from 'src/app/service/message.service';
import { ReservationService } from 'src/app/service/reservation.service';

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
  check: any=[];

  numberBookSeats: number;
  numberSeats: number;
  freeSeats: boolean;
  reservation: any = [];
  public loading = false;

  
 
  param: any =[];

  connections: Connections = {
    id_connections: 0,
    id_tourist: 0,
    id_flight: 0,
  };

  constructor(private flightService: FlightService,
    private connectionService: ConnectionsService,
    private touristService: TouristService,
    private reservationService: ReservationService,
    
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
    this.loading = true;
    const params = this.activatedRoute.snapshot.params;

    for (let id of this.tourist) {
      this.connections.id_tourist = id.id_tourist;
    }

    this.connections.id_flight = params.id_flight;
    this.checkNumberSeats();

    setTimeout(()=>{
      if(this.freeSeats === true){


        this.connectionService.saveConnection(this.connections)
        .subscribe(
          res => {
          this.loading = false;
          this.message.success("The flight is booked");
          },
        err => 
        {
        console.error(err);
        this.loading = false;
        this.message.error("Something wrong, please try again");
        });
      }else{
        this.loading = false;
        this.message.error("no free seats for this flight");
      }
    }, 5000);

  }



  toggle() {
    this.show = !this.show;
  }

  checkNumberSeats(){
    this.reservationService.checkSeats(this.connections.id_flight).subscribe(
      res10 => {
        console.log(`id flight ${this.connections.id_flight}`);
        this.check = res10;
       
       setTimeout(()=>{
        for(let i of this.check){
        console.log(i.number_seats);
        this.numberBookSeats = i.number_seats;
        }
        this.numberOfSeatsInFlight();
        console.log(`liczba zajętych miejsc ${this.numberBookSeats}`);
      }, 2000);
    },
      err => {
        console.error(err);
        this.message.error("Something wrong, please try again");
      });
    }


  numberOfSeatsInFlight(){
    this.flightService.getFly(this.connections.id_flight).subscribe(
      res => {
        this.reservation = res;
        console.log( res);

        setTimeout(()=>{
            for(let i of this.reservation){
              this.numberSeats = i.number_of_seats;
              console.log(this.numberSeats);
            }

           if(this.numberBookSeats < this.numberSeats){
              this.freeSeats = true;
              console.log("Są wolne miejsca");
              
             } else {
                this.freeSeats = false;
                console.log("nie ma wolnych miejsc");
              }
              console.log(this.freeSeats);
        }, 1000);
      },
      err => {
        return console.error(err);
      });
  }

}
