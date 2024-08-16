import { Routes } from '@angular/router';
import {ListCatsComponent} from "./page/list-cats/list-cats.component";
import {BookComponent} from "./page/book/book.component";

export const routes: Routes = [
  {
    path: "cat",
    component: ListCatsComponent
  },
  {
    path: "book",
    component: BookComponent
  }
];
