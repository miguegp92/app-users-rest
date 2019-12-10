import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  id;
  album: any;
  photos: any;
  constructor(private route: ActivatedRoute, private request: RestService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getAlbum();
    this.getPhotos();
  }

  getAlbum(){
    this.request.getDataById('albums', this.id).subscribe(data => {

      this.album = data;
    });
  }

  getPhotos(){
    this.request.getDataByKey('photos', 'albumId',  this.id).subscribe(data => {
      this.photos = data;
    });
  }

}
