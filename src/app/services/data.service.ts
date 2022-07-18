import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBooks } from '../components/home/books';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private _url : string = 'https://openlibrary.org/subjects/';

  constructor(private http: HttpClient) { }

  getBooks(title: string, author: string) {

  }

}
