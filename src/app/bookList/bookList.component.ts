import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../../../shared/models/book.model';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { AddBookOnShoppingCart } from 'shared/actions/bookAdd.action';
import { DeleteBookOfShoppingCart } from 'shared/actions/bookDelete.action';

@Component({
  selector: 'app-product',
  templateUrl: './bookList.component.html',
  styleUrls: ['./bookList.component.css']
})
export class BookListComponent implements OnInit {

  books : Book[] = [];
  booksOnShoppingCart : Observable<Book>;
  bookSubscription: Subscription | undefined;
  genderFilter : string = "";
  searchFilter : string = "";
  sortMode : string = "reference";

  constructor(private booksService : BooksService, private router : Router, private store : Store) {
    this.booksOnShoppingCart = this.store.select(state => state.booksOnShoppingCart.booksOnShoppingCart);
  }

  addBookOnShoppingCart(book: Book){
    this.store.dispatch(new AddBookOnShoppingCart(book));
  }

  deleteBookOfShoppingCart(book: Book){
    this.store.dispatch(new DeleteBookOfShoppingCart(book));
  }

  ngOnInit(): void {
    this.bookSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );

    this.booksService.getBooks();
    this.booksService.emitBooks();
    console.log(this.booksService.books);
  }

}
