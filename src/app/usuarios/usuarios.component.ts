import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any[];
  constructor(private request: RestService, private router: Router) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.request.getAllData('users').subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  volverAtras(){
    window.history.back();
  }
}


