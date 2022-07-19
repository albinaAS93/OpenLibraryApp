import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    data: any;
    books: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.booksList();
  }

  booksList(): void {
    this.dataService.getBooks().subscribe(res => {
      this.data = res;
      this.books = this.data.works;
    });
  }

}
