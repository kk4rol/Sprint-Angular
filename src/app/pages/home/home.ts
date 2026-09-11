import { Component } from '@angular/core';
import { Menu } from '../../componentes/menu/menu';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-home',
  imports: [Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private auth:Auth){}

  logout():void{
    this.auth.logout();
  }
}
