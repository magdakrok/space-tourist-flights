import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tourist } from '../models/tourist'

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  API_URI = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getTourists() {
    return this.http.get('http://localhost:3000/api/tourist');

  }
  getTourist(id_tourist: string) {
    return this.http.get(`http://localhost:3000/api/tourist/${id_tourist}`);
  }
  saveTourist(tourist: Tourist) {
    return this.http.post(`http://localhost:3000/api/tourist`, tourist);
  }
  deleteTourist(id_tourist: string) {
    return this.http.delete(`http://localhost:3000/api/tourist/${id_tourist}`);
  }
  updateTourist(id_tourist: number, updateTourist: Tourist) {
    return this.http.put(`http://localhost:3000/api/tourist`, updateTourist);
  }
}
