import { Component } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../services/vehicle';
import { Veiculo } from '../../models/veiculo.model';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  vehicles: Veiculo[] = [];
  selecionado: Veiculo | null = null;

  constructor(private vehicle:Vehicle){}

  ngOnInit():void{
    this.vehicle.getVeiculos().subscribe(
      response => {
        this.vehicles = response.vehicles;
      }
    )
  }

  veiculoSelecionado(event:Event):void{
    const idSelecionado = (event.target as HTMLSelectElement).value;

    if(idSelecionado){
      this.selecionado = this.vehicles.find(v => v.id == Number(idSelecionado)) || null;
    } else {
      this.selecionado = null;
    }
  }
}
