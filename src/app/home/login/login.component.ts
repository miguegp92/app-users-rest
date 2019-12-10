import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private http: RestService) {
    window['app'] = this;
  }

  ngOnInit() {
  }

  login(){
    // this.http.fillDataService().then( ok => this.route.navigate(['/dashboard'] ) );
     this.route.navigate(['/dashboard']);
  }

}
