import { Component, OnInit, HostBinding } from '@angular/core';
import { Tourist } from '../../../models/tourist';
import { Flight } from '../../../models/flight';
import { Connections } from '../../../models/connections';
import { TouristService } from '../../../service/tourist.service';
import { ConnectionsService } from '../../../service/connectionsService';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/app/service/flight.service';
import { MessageService } from 'src/app/service/message.service';
import { ReservationService } from 'src/app/service/reservation.service';



@Component({
  selector: 'app-connection-tables',
  templateUrl: './connection-tables.component.html',
  styleUrls: ['./connection-tables.component.css']
})

export class ConnectionsTablesComponent implements OnInit {

  touristTable: any = [];
  flightTable: any = [];
  checkConnection: any = [];
  reservation: any = [];
  flag: boolean;
  firstName: string;
  lastName: string;
  edit: boolean = false;
  check: any=[];
  numberBookSeats: number;
  numberSeats: number;
  freeSeats: boolean;


  public loading = false;

 @HostBinding('class') classes = 'row';

  connections: Connections = {
    id_connections: 0,
    id_tourist: 0,
    id_flight: 0,
  };

  flightt: Flight = {
    departure_date: new Date,
    arrival_date: new Date,
    number_of_seats: 0,
    ticket_price: 0,
  };
  tourist: Tourist = {
    id_tourist: 0,
    first_name: '',
    last_name: '',
    gender: '',
    country: '',
    remarks: '',
    date_of_birth: new Date
  };

    constructor(private tourists: TouristService,
    private flight: FlightService,
    private connectionsService: ConnectionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: MessageService,
    private reservationService: ReservationService,
    ) {

     }

  ngOnInit() {
    this.getFlight();
    this.getTourist();
}

   getTourist() {
    this.tourists.getTourists().subscribe(
      res2 => {
        this.touristTable = res2;
       },
      err => {
        return console.error(err);
      })
  }

  getFlight() {
    this.flight.getFlys().subscribe(
      res => {
        this.flightTable = res;
      },
      err => {
        return console.error(err);
      })
  }

  getReservation() {
    this.connectionsService.getData().subscribe(
      res3 => {
        this.reservation = res3;
      },
      err => {
        return console.error(err);
      })
  }


   saveNewTourist() {
    this.loading = true;
    const id_tourist = this.connections.id_tourist;
    const id_flight = this.connections.id_flight;
    this.connectionsService.checkReservation(id_tourist, id_flight).subscribe(
      res8 => {
        this.checkConnection = res8;
      },
        err => {
        return console.error(err);
        });
     
    setTimeout(() => {
        for (let reserve of this.checkConnection) {
            if (this.connections.id_tourist == reserve.id_tourist && this.connections.id_flight == reserve.id_flight) {
            this.flag = true;
          }
          else {
          this.flag = false;
          }
        }

    
       if (this.flag === true) 
          {
            this.loading = false;
            this.message.error("You booked this flight. Please check another flight");
          } else {
       
            this.checkNumberSeats();
       
            setTimeout(()=>{
              if(this.freeSeats === true){
                 this.connectionsService.saveConnection(this.connections)
                .subscribe(
                  res => {
                  this.loading = false;
                  this.message.success("Saved");
                  },
                err => 
                {
                console.error(err);
                this.loading = false;
                this.message.error("Something went wrong, please try again");
                });
              }else{
                this.loading = false;
                this.message.error("No free seats for this flight");
              }
            }, 5000);
          }
        }, 5000);
             
       this.flag = undefined;
  }
  

    checkNumberSeats(){
      this.reservationService.checkSeats(this.connections.id_flight).subscribe(
        res10 => {
        this.check = res10;
         
         setTimeout(()=>{
          for(let i of this.check){
         this.numberBookSeats = i.number_seats;
          }
          this.numberOfSeatsInFlight();
        }, 2000);
      },
        err => {
          console.error(err);
        });
      }


    numberOfSeatsInFlight(){
      this.flight.getFly(this.connections.id_flight).subscribe(
        res => {
          this.reservation = res;
         

          setTimeout(()=>{
              for(let i of this.reservation){
                this.numberSeats = i.number_of_seats;
                console.log(this.numberSeats);
              }
              if(this.numberBookSeats < this.numberSeats){
                this.freeSeats = true;
              } else {
                  this.freeSeats = false;
              }
            }, 1000);
        },
        err => {
          return console.error(err);
        });
    }
}





























