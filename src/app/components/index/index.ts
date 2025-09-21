import { Component } from '@angular/core';
import {IndexService} from '../../services/index-service';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.css'
})

export class Index {
  message: any;
  constructor(private indexService: IndexService) {
    this.getIndex();
  }
  getIndex() {
    this.indexService.getIndex().subscribe({
      next:(data: any)=> {
        console.error(data);
        alert(1);
        this.message = data;
      },
      error:(data)=> {
        console.error(data);
        alert(2);
        alert(data);
      }
    });
  }
}
