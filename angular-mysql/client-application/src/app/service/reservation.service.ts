import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Connections} from '../models/connections'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  API_URI = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getReservation(departure_date: Date, arrival_date: Date){
    return this.http.get(`http://localhost:3000/api/reservation/${departure_date}/${arrival_date}`);
  }
  
}