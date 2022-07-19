import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
    data: any;
    books: any;
=======
  public books = [] as any;

  data: any;
  title: any;
  author: any;
>>>>>>> 077c3a47fc194fedff25ab6e20b7914005ce0a97

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.booksList();
  }

<<<<<<< HEAD
  booksList(): void {
    this.dataService.getBooks().subscribe(res => {
      this.data = res;
      this.books = this.data.works;
    });
=======
  booksList() {

>>>>>>> 077c3a47fc194fedff25ab6e20b7914005ce0a97
  }

}
