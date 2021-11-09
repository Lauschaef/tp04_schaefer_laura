import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Book } from '../../../shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  booksSubject = new Subject<any[]>();
  books: Book[] = [];

  emitBooks(){
    this.booksSubject.next(this.books);
  }

  getBooks(){
    this.getJSON().subscribe(
      (response) => {
        this.books = response;
        this.emitBooks();
      },
      (error) => {
        console.log("erreur : " + error);
      }
    )
  }

  constructor(private http:HttpClient) { }

  public getJSON(): Observable<Book[]> {
    return this.http.get<Book[]>("../assets/books.json");
  }
}
