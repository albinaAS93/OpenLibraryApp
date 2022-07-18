import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: any;
  list: any;
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.booksList();
  }

  booksList(): void {
    console.log(this.books.data);
    this.dataService.getBooks().subscribe(res => {
      this.books = res;
    });
  }

}
