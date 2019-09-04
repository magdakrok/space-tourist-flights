import { Component, OnInit } from '@angular/core';
import {TouristService} from '../../../service/tourist.service';

@Component({
  selector: 'app-tourist-list',
  templateUrl: './tourist-list.component.html',
  styleUrls: ['./tourist-list.component.css']
})
export class TouristListComponent implements OnInit {

  touristt: any = [];
  connection: any[];
  constructor(private touristsService: TouristService) { }

  ngOnInit() {
    this.getTourists();
  }

  getTourists(){
    this.touristsService.getTourists().subscribe(
      res => {
        this.touristt=res;
        console.log(res)
      },
        err => console.log(err)
    );
  }
  deleteTourist(id_tourist: string){
    this.touristsService.deleteTourist(id_tourist).subscribe(
      res => {
        console.log(res);
        this.getTourists();
      },
      err => console.log(err)
    )
  }
}
