import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CatService} from "../../services/cat.service";
import * as BookActions from "./book.acton";
import {catchError, exhaustMap, map, mergeMap, of} from "rxjs";
import {BookService} from "../../services/book.service";
import {loadBooks} from "./book.acton";

@Injectable()
export class BookEffect {
  constructor(private action$: Actions,
              private bookService: BookService) {
  }

  getCats$ = createEffect(() =>
    this.action$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap((quantity) => this.bookService.getBooks().pipe(
          map(books => BookActions.loadBooksSuccess({books})),
          catchError(error => of(BookActions.loadBooksFailure({error})
            )
          )
        )
      )
    )
  )
}
