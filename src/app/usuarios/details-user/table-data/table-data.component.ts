import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../../services/rest.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements AfterViewInit {

  @Input() tabla;
  @Input() data;
  lista: any[];
  constructor(private request: RestService) { }

  ngAfterViewInit() {
    // this.lista =
  }

  returnChildTable(){
    switch (this.tabla) {
      case 'posts': return 'comments';
      case 'albums': return 'photos';
    }
  }
  returnChildKey(){
    switch (this.tabla) {
      case 'posts': return 'postId';
      case 'albums': return 'albumId';
    }
  }

  getDataFromList(id: number){
    // const tabla = this.returnChildTable();
    console.log('data, ', this.returnChildTable(), this.returnChildKey(), id);
    // this.request.getDataByKey(this.returnChildTable(), this.returnChildKey(), id).subscribe(data => {
    //   // this.albums = data;
    //   console.log('data, ', this.returnChildTable(), this.returnChildKey(), id);
    // });
  }
}
