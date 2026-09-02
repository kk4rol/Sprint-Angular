import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class Dados {
  
  private apiUrl = "http://localhost:3001/"

  constructor(private http:HttpClient) {}

  getVeiculos():Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(this.apiUrl);
  }
}
