import { Component } from '@angular/core';
import {loadBooks} from "../../ngrx/book/book.acton";
import {Store} from "@ngrx/store";
import {Book} from "../../models/book.model";
import {Observable} from "rxjs";
import {BookService} from "../../services/book.service";
import {BookState} from "../../ngrx/book/book.state";
import {AsyncPipe, NgForOf} from "@angular/common";
import {BookCardComponent} from "../../compoment/book-card/book-card.component";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    BookCardComponent
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  books$ !: Observable<BookState>;
constructor(private store: Store<{book : BookState}>) {
  this.books$ =this.store.select('book');

}
showBookDetail(){
  this.store.dispatch(loadBooks());}

}
