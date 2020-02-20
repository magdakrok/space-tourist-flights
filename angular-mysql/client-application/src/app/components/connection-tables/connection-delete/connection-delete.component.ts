import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import {TouristService} from './../../../service/tourist.service';
import { ConnectionsService } from './../../../service/connectionsService';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/app/service/flight.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-connection-delete',
  templateUrl: './connection-delete.component.html',
  styleUrls: ['./connection-delete.component.css']
})
export class ConnectionDeleteComponent implements OnInit {

 
  @HostBinding('class') classes = 'row';

  connections: any = [];
    
  constructor(private tourists: TouristService, 
    private flight: FlightService, 
    private connectionsService: ConnectionsService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private message: MessageService) { }

  
  ngOnInit() {
    this.getDataConnection();
  }

  getDataConnection(){
    this.connectionsService.getData().subscribe(
      res => {
        this.connections=res;
        //console.log(res)
      },
        
      err => {console.log(err);
      this.message.error("Something wrong, please try again");
      }

    );
  }

  deleteConnection(id_connection: string){
    
      this.connectionsService.deleteData(id_connection).subscribe(
        res => {
          //console.log(res);
          this.message.success("Delete succesfull");
          this.getDataConnection();
        },
        err =>{ console.log(err),
          this.message.error("Something wrong, please try again");
        }
      )
    }
}
