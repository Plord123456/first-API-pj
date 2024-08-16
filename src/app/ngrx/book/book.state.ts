import {Book} from "../../models/book.model";

export interface BookState { // Tạo interface BookState
  books: Book[]; // Mảng books
  error: any; // Lỗi
}
