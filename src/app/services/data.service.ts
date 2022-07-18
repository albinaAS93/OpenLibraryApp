import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get('https://openlibrary.org/subjects/fantasy.json');
  }

}
