import { Component } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { Veiculo } from '../../models/veiculo.model';
import { Dados } from '../../services/dados';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [Menu, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  public veiculos:Veiculo[]=[];

  constructor(private dados:Dados){}

  buscarVeiculos():void{

    this.dados.getVeiculos().subscribe
    (
      (dadosrecebidos) => {
        this.veiculos = dadosrecebidos;
      },
      (erro) => {
        console.error("Erro: ",erro);
      }
    )
  }
}
