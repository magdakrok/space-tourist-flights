import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/service/flight.service';
import { TouristService } from 'src/app/service/tourist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionsService } from 'src/app/service/connectionsService';
import { Connections } from 'src/app/models/connections';
import { Tourist } from 'src/app/models/tourist';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.css']
})
export class ReservationAddComponent implements OnInit {

  tourist: any =[];
  flight: any=[];
  show: boolean= false;

  connections: Connections = {
    id_connections: 0,
    id_tourist: 0,
    id_flight: 0,
  };

  constructor(private flightService: FlightService, private connectionService: ConnectionsService, private touristService: TouristService, private activatedRoute: ActivatedRoute, private router: Router) { }

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
        if(res == 0){
          this.router.navigate([`/tourists/add`]);
         }
        this.toggle();
      },
      err => {
        return console.error(err);
      }
    )
  }


  bookReservation(id_tourist: number){
    const params = this.activatedRoute.snapshot.params;

    for(let id of this.tourist){
      this.connections.id_tourist=id.id_tourist;
     }
   this.connections.id_flight=params.id_flight;
 
   console.log(this.connections.id_flight, this.connections.id_tourist);
    this.connectionService.saveConnection(this.connections)
    .subscribe(
      res => {
 
         console.log(res),
         console.log("save successed");
          
 
        },
      err => console.error(err)
       );
    
  }

  toggle(){
    this.show = !this.show;
  }

}
