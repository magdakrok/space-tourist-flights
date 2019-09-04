import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Tourist } from './../../../models/tourist';
import { Flight } from './../../../models/flight';
import { Connections } from './../../../models/connections';
import { TouristService } from './../../../service/tourist.service';
import { ConnectionsService } from './../../../service/connectionsService';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/app/service/flight.service';


@Component({
  selector: 'app-connection-tables',
  templateUrl: './connection-tables.component.html',
  styleUrls: ['./connection-tables.component.css']
})
export class ConnectionsTablesComponent implements OnInit {

  connect: any = [];
  connect2: any = [];
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
    first_name: '',
    last_name: '',
    gender: '',
    country: '',
    remarks: '',
    date_of_birth: new Date
  };


  edit: boolean = false;
  constructor(private tourists: TouristService, private flight: FlightService, private connectionsService: ConnectionsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getTourist();
    this.getFlight();
  }

  getTourist() {
    this.tourists.getTourists().subscribe(
      res2 => {
        this.connect = res2;
        console.log(res2);
      },
      err => {
        return console.error(err);
      })
  }

  getFlight() {
    this.flight.getFlys().subscribe(
      res => {
        this.connect2 = res;
        console.log(res);
      },
      err => {
        return console.error(err);
      })
  }

  saveNewTourist() {

    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    console.log(this.connections);


    this.connectionsService.saveConnection(this.connections)
      .subscribe(
        res => {

          console.log(res),
            console.log("save successed");

        },
        err => console.error(err)
      );
    }
}
