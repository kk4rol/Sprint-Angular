import { Component } from '@angular/core';
import { Dados } from '../../services/dados';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario = {
    nome: '',
    senha: ''
  }

  constructor(private dados:Dados, private router:Router){}

  login(){
    this.dados.login(this.usuario).subscribe({
      next:(response) => {
       this.router.navigate(['/home']); 
      },
      error:(err) => {
        console.error("Falha no login", err);
      }
    })
  }

}
