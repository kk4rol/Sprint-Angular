import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  
})
export class Menu {

  menuAberto = false;

  mostrarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  constructor(private router:Router, private auth:Auth){}

  logout(): void{
    this.auth.logout();
  }

  logoutaberto = false;

  mostrarLogout(): void{
    this.logoutaberto = !this.logoutaberto;
  }
}
