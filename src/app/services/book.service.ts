import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../models/book.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = "https://potterapi-fedeperin.vercel.app/en/books"; // Tạo biến apiUrl để lưu đường dẫn API
  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> { // Tạo phương thức getBooks trả về mảng Book
    return this.http.get<Book[]>(this.apiUrl); // Gọi API để lấy dữ liệu
  }
}
