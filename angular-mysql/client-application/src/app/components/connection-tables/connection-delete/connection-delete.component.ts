import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { ConnectionsService } from './../../../service/connectionsService';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-connection-delete',
  templateUrl: './connection-delete.component.html',
  styleUrls: ['./connection-delete.component.css']
})
export class ConnectionDeleteComponent implements OnInit {

@HostBinding('class') classes = 'row';

  connections: any = [];

  constructor(
    private connectionsService: ConnectionsService,
    private message: MessageService) { 
  }

  ngOnInit() {
    this.getDataConnection();
  }

  getDataConnection() {
    this.connectionsService.getData().subscribe(
      res => {
        this.connections = res;
        
      },
      err => {
      this.message.error("Something went wrong, please try again");
      }
    );
  }

  deleteConnection(id_connection: string) {
    this.connectionsService.deleteData(id_connection).subscribe(
      res => {
      this.message.success("Deleted");
        this.getDataConnection();
      },
      err => {
      this.message.error("Something went wrong, please try again");
      }
    )
  }
}
