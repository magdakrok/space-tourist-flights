import { Component, OnInit, HostBinding } from '@angular/core';
import { Tourist } from './../../../models/tourist';
import { Flight } from './../../../models/flight';
import { Connections } from './../../../models/connections';
import { TouristService } from './../../../service/tourist.service';
import { ConnectionsService } from './../../../service/connectionsService';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/app/service/flight.service';
import { MessageService } from 'src/app/service/message.service';

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
    private message: MessageService) {

     }

  ngOnInit() {
    this.getFlight();
    this.getTourist();
    this.getReservation();
  }

  getTourist() {
    this.tourists.getTourists().subscribe(
      res2 => {
        this.touristTable = res2;
        //console.log(res2);
      },
      err => {
        return console.error(err);
      })
  }

  getFlight() {
    this.flight.getFlys().subscribe(
      res => {
        this.flightTable = res;
        //console.log(res);
      },
      err => {
        return console.error(err);
      })
  }

  getReservation() {
    this.connectionsService.getData().subscribe(
      res3 => {
        this.reservation = res3;
        //console.log(res3);
      },
      err => {
        return console.error(err);
      })
  }


  saveNewTourist() {
    this.checkReserve();

    for (let reserve of this.reservation) {
      if (this.connections.id_tourist == reserve.id_tourist && this.connections.id_flight == reserve.id_flight) {
        this.flag = true;
        break;
      }
      else {
        this.flag = false;
      }
    }

    if (this.flag === true) {
      this.message.error("You are booked  this flight. please check another flight");
    } else {
      this.connectionsService.saveConnection(this.connections)
        .subscribe(
          res => {
            this.message.success("save succesfull");
          },
          err => {
            console.error(err);
            this.message.error("Something wrong, please try again");
          });
    }
  }

  checkReserve() {
    const id_tourist = this.connections.id_tourist;
    const id_flight = this.connections.id_flight;
    this.connectionsService.checkReservation(id_tourist, id_flight)
      .subscribe(
        res8 => {
          this.checkConnection = res8;
          //console.log(res8);
        },
        err => {
          return console.error(err);
        });
  }
}





























