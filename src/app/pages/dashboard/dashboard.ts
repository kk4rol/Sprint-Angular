import { Component } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../services/vehicle';
import { Veiculo, VeiculosAPI } from '../../models/veiculo.model';
import { Data } from '../../services/data';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  vehicles: Veiculo[] = [];
  selecionado: Veiculo | null = null;
  digitado: VeiculosAPI | null = null;

  vinDigitado: string = '';

  constructor(private vehicle:Vehicle, private data:Data){}

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

  codigoDigitado(event:Event):void{
    this.vinDigitado = (event.target as HTMLInputElement).value;
  }

  buscarInfos():void{

    if(!this.vinDigitado.trim()) {
      return;
    }
    
    this.data.getVeiculosInfo(this.vinDigitado).subscribe({
      next: (dadosRecebidos) => {
        this.digitado = dadosRecebidos;
        console.log("Dados recebidos:", dadosRecebidos);
      },
      error: (erro) => {
        console.error("Erro ao buscar veículo:", erro);
        this.digitado = null;
      }
    });
  }

}

