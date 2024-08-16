import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CatService} from "./services/cat.service";
// @ts-ignore
import {CatState} from "./ngrx/cat/cat.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as CatActions from "./ngrx/cat/cat.action";
import {ListCatsComponent} from "./page/list-cats/list-cats.component";
import {NavbarComponent} from "./compoment/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListCatsComponent, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-effect';

  constructor(private catService : CatService, private store: Store<{cat : CatState}>) {

  }

}
