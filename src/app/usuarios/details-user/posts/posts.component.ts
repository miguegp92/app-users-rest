import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  id;
  post: any;
  comments: any;
  constructor(private route: ActivatedRoute, private request: RestService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getPost();
    this.getComments();
  }


  getPost(){
    this.request.getDataById('posts', this.id).subscribe(data => {

      this.post = data;
    });
  }
  getComments(){
    this.request.getDataByKey('comments', 'postId', this.id).subscribe((data: any) => {
      this.comments = data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
    });
  }

}
