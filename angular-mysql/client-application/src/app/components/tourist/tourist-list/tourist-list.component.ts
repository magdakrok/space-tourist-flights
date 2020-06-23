import { Component, OnInit } from '@angular/core';
import { TouristService } from '../../../service/tourist.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-tourist-list',
  templateUrl: './tourist-list.component.html',
  styleUrls: ['./tourist-list.component.css']
})
export class TouristListComponent implements OnInit {

  touristt: any = [];
  connection: any[];
  constructor(private touristsService: TouristService,
    private message: MessageService) { }

  ngOnInit() {
    this.getTourists();
  }

  getTourists() {
    this.touristsService.getTourists().subscribe(
      res => {
        this.touristt = res;
        },
      err => {
        this.message.error("Something went wrong, please try again");
        }
    );
  }
  deleteTourist(id_tourist: string) {
    this.touristsService.deleteTourist(id_tourist).subscribe(
      res => {
        this.getTourists();
        this.message.success("Deleted")
      },
      err => {
        this.message.error("Something went wrong, please try again");
        }
    )
  }
}
