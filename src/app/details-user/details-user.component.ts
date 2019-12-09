import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  id: number;
  usuario: any;
  constructor(private route: ActivatedRoute, private request: RestService) {
    this.id = this.route.snapshot.params['user'];
  }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.request.getDataById('users', this.id).subscribe(usuario=> {
      console.log('usuario', usuario)
      this.usuario = usuario;
    });
  }

  get returnFullAdress() {
    const address = this.usuario.address;
    return `${address.street} - ${address.suite} (${address.city}) `;
  }
}
