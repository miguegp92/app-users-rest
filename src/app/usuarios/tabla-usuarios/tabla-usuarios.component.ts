import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {


  usuarios: any;
  constructor(private request: RestService, private router: Router) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){

    this.request.getAllData('users').subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  redirectToDetails(id: number){
    this.router.navigate([`users/${id}`]);
  }

}
