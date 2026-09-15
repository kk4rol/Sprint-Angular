import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeiculosAPI } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class Data {
  
  private apiUrl = "http://localhost:3001"  

  constructor(private http:HttpClient){}

  getVeiculosInfo(vin:string): Observable<VeiculosAPI>{
    return this.http.post<VeiculosAPI>(`${this.apiUrl}/vehicleData`, {vin});
  }
}

