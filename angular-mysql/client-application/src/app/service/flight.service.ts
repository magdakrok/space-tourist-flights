import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight'

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  API_URI = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getFlys() {
    return this.http.get('http://localhost:3000/api/flys');
  }
  getFly(id_flight: number) {
    return this.http.get(`http://localhost:3000/api/flys/${id_flight}`);
  }
  saveFlight(flight: Flight) {
    return this.http.post(`http://localhost:3000/api/flys`, flight);
  }
  deleteFly(id_flight: string) {
    return this.http.delete(`http://localhost:3000/api/flys/${id_flight}`);
  }
  updateFlight(id_flight: number, updateFlight: Flight) {
    return this.http.put(`http://localhost:3000/api/flys`, updateFlight);
  }
}
