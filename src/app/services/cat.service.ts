import { Injectable } from '@angular/core';
import {CatModel} from "../models/cat.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatService {
  catURL = 'https://api.thecatapi.com/v1/images/search?limit=10';

  constructor(private http: HttpClient) {
  }

  getCats(limit: number) : Observable<CatModel[]> {
    return this.http.get<CatModel[]>(`${this.catURL}${limit}`)
  }
}
