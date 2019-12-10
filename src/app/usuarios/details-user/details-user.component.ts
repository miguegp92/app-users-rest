import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  id: number;
  usuario: any = {};
  albums: any = [];
  comments: any = [];
  constructor(private route: ActivatedRoute, private request: RestService) {
    this.id = this.route.snapshot.params['user'];
  }

  ngOnInit() {
    console.log('OK')
    this.getUserData();
    this.getAlbums();
    this.getComments();
  }

  getUserData(){
    this.request.getDataById('users', this.id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  getAlbums(){

    // this.albums = this.request.app.albums.data
    this.request.getDataByKey('albums', 'userId', this.id).subscribe(data => {
      this.albums = data;
      console.log('this.albums, ', data);
    });

  }

  getComments(){
    this.request.getDataByKey('posts', 'userId', this.id).subscribe(data => {
      console.log('this.posts, ', data);
      this.comments = data;
    });
  }

  get returnFullAdress() {
    const address = this.usuario.address;
    return `${address.street} - ${address.suite} (${address.city}) `;
  }
}
