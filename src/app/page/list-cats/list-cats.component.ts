import {Component} from '@angular/core';
import {CatState} from "../../ngrx/cat/cat.state";
import {Store} from "@ngrx/store";
import * as CatActions from "../../ngrx/cat/cat.action";
import {Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CatCardComponent} from "../../compoment/cat-card/cat-card.component";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-list-cats',
  standalone: true,
  imports: [CatCardComponent, AsyncPipe, MatProgressSpinnerModule, RouterLink],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.scss'
})
export class ListCatsComponent {
  cat$!: Observable<CatState>

  constructor(private store: Store<{ cat: CatState }>) {
    this.cat$ = this.store.select('cat')
  }
  showCatDetail() {
    this.store.dispatch(CatActions.getAllCats({limit: 15}));
  }

}
