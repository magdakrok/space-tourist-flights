import { Component, OnInit, HostBinding } from '@angular/core';
import { Tourist } from '../../../models/tourist';
import { TouristService } from '../../../service/tourist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { ReservationComponent } from '../../reservations/reservations/reservation.component';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristAddComponent implements OnInit {

  @HostBinding('class') classes = 'row';

param: any =[];
touristt: any=[];
id_tourist: number;

  tourist: Tourist = {
    first_name: '',
    last_name: '',
    gender: '',
    country: '',
    remarks: '',
    date_of_birth: new Date
  };
  
  
  id_flight: number;
  departure_date: Date;
  arrival_date: Date;
  edit: boolean = false;
  constructor(private touristService: TouristService,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: MessageService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.id_flight = params.id_flight;
    this.arrival_date=params.arrival_date;
    this.departure_date = params.departure_date;

    console.log(this.param);
    
    if (params.id_tourist) {
      this.touristService.getTourist(params.id_tourist).subscribe(
        res => {
          this.edit = true,
            this.tourist == res;
            
          //console.log(res);
        },
        err => {
          this.message.error("Something wrong, please try again");
          console.log(err)
        }
      )
    }
  }

  saveNewTourist() {
    this.touristService.saveTourist(this.tourist)
      .subscribe(
        res => {
          console.log(res);
          this.message.success("save succesfully");
         // this.touristService.getTourists();
          this.touristService.getTouristName(this.tourist.first_name, this.tourist.last_name).subscribe(
            res => {
              console.log(res);
              this.touristt = res;
             // this.router.navigate([''])
            }
          )


          setTimeout(()=>{
            for(let t of this.touristt){
                this.id_tourist = t.id_tourist;
                console.log(this.id_tourist);
            }
            
           if(typeof this.id_flight !== undefined){
           this.router.navigate(['/reservation/add', this.id_flight, this.id_tourist]); 
          }
          else  this.router.navigate(['/'])
        },
          3000);
        },
        err => {
          this.message.error("Something wrong, please try again");
          console.log(err)
        });
  }

  updateTourist() {
    this.touristService.updateTourist(this.tourist.id_tourist, this.tourist).subscribe(
      res => {
        //console.log(res);
      },
      err => {
        this.message.error("Something wrong, please try again");
        console.log(err)
      })
  }
}
