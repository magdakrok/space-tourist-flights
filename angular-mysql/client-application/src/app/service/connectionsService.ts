import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connections } from '../models/connections'

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  API_URI = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getlistTourist(id_tourist: string) {
    return this.http.get(`http://localhost:3000/api/connection/${id_tourist}`);
  }
  getListFlight(id_flight: string) {
    return this.http.get(`http://localhost:3000/api/connection/${id_flight}`);
  }
  getData() {
    return this.http.get('http://localhost:3000/api/connection');
  }

  checkReservation(id_tourist: number, id_flight: number) {
    return this.http.get(`http://localhost:3000/api/connection/${id_tourist}/${id_flight}`)
  }

  

  deleteData(id_connections: string) {
    return this.http.delete(`http://localhost:3000/api/connection/${id_connections}`);
  }

  saveConnection(connections: Connections) {
    console.log(connections);
    return this.http.post(`http://localhost:3000/api/connection`, connections);
  }

  deleteConnectionFlight(id_connections: string) {
    return this.http.delete(`http://localhost:3000/api/tourist/${id_connections}`);
  }
}