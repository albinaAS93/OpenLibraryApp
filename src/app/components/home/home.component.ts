import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public books = [] as any;

  data: any;
  title: any;
  author: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.booksList();
  }

  booksList() {

  }

}
