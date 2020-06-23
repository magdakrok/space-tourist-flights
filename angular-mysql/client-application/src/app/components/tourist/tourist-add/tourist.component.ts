import { Component, OnInit, HostBinding } from '@angular/core';
import { Tourist } from '../../../models/tourist';
import { TouristService } from '../../../service/tourist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
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
  isTourist: boolean;
  loading:  boolean;
  id_flight: number;
  departure_date: Date;
  arrival_date: Date;
  edit: boolean = false;

  tourist: Tourist = {
    first_name: '',
    last_name: '',
    gender: '',
    country: '',
    remarks: '',
    date_of_birth: new Date
  };
  
  
  
  constructor(private touristService: TouristService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: MessageService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.id_flight = params.id_flight;
    this.arrival_date=params.arrival_date;
    this.departure_date = params.departure_date;

   if (params.id_tourist) {
      this.touristService.getTourist(params.id_tourist).subscribe(
        res => {
          this.edit = true,
            this.tourist == res;
        },
        err => {
          this.message.error("Something went wrong, please try again");
        }
      )
    }
  }

  saveNewTourist() {
    this.loading = true;
    const first_name = this.tourist.first_name;
    const last_name = this.tourist.last_name;
    const date_of_birth = this.tourist.date_of_birth;

    this.touristService.checkTourist(first_name, last_name, date_of_birth)
    .subscribe(res => {
      console.log(res);
      if(res == 0){
        this.isTourist = false;
      }
      else {
        this.isTourist = true;
      }
      },
    err => {
      this.message.error("Something went wrong, please try again");
      return console.error(err);
    });

    setTimeout(()=>{
      
      if(this.isTourist === false){
              this.touristService.saveTourist(this.tourist)
             .subscribe(
                  res => {
                  this.message.success("saved");
                  
                  this.touristService.getTouristName(this.tourist.first_name, this.tourist.last_name).subscribe(
                      res => {
                        this.touristt = res;
                      })

                     
                    setTimeout(()=>{
                      if(this.id_flight === undefined){
                          this.router.navigate(['/home']);
                      }
                      else 
                      {
                        for(let t of this.touristt)
                        {
                          this.id_tourist = t.id_tourist;
                          console.log(this.id_tourist);
                        }
                      this.router.navigate(['/reservation/add', this.id_flight, this.id_tourist]); 
                      }
                    
                     }, 2000);
              err => {
                    this.message.error("Something went wrong, please try again");
                    }
              })
      }else{
        this.message.error("You exist in the database");
      }
      this.loading = false;
      }, 5000);
    
    }
      
    
    updateTourist() {
    this.touristService.updateTourist(this.tourist.id_tourist, this.tourist).subscribe(
      res => {
        },
      err => {
        this.message.error("Something  went wrong, please try again");
        })
  }
}
