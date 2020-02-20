import { Component, OnInit, HostBinding } from '@angular/core';
import { Tourist } from '../../../models/tourist';
import { TouristService } from '../../../service/tourist.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristAddComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  tourist: Tourist = {
    first_name: '',
    last_name: '',
    gender: '',
    country: '',
    remarks: '',
    date_of_birth: new Date
  };

  edit: boolean = false;
  constructor(private touristService: TouristService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id_tourist) {
      this.touristService.getTourist(params.id_tourist).subscribe(
        res => {
          this.edit = true,
            this.tourist == res;
          console.log(res);
         
          // this.edit = true;
           
        },
        err => {
          return console.error(err);
        }
      )
    }
  }

  saveNewTourist() {


    this.touristService.saveTourist(this.tourist)
      .subscribe(
        res => {
          console.log(res),
            console.log("save successed"),
           // this.touristService.getTourists();
            
              this.router.navigate(['home']);
              
        },
        err => console.error(err)
      );
  }

  updateTourist() {

    this.touristService.updateTourist(this.tourist.id_tourist, this.tourist).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)

    )
  }
}
