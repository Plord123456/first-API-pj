import { createReducer, on } from '@ngrx/store';

import { loadBooks, loadBooksFailure, loadBooksSuccess } from './book.acton';
import {Book} from "../../models/book.model";
import {BookState} from "./book.state";



export const initialState: BookState = { // Khởi tạo giá trị ban đầu cho initialState
  books: [], // Khởi tạo mảng books rỗng
  error: null // Giả sử không có lỗi
};

export const bookReducer = createReducer( // Tạo reducer cho book
  initialState,
  on(loadBooks, state => ({ // Khi loadBooks được gọi, trả về state mới với mảng books rỗng
    ...state, // Giữ nguyên state cũ
    books: [] // Gán mảng books bằng mảng rỗng
  })),
  on(loadBooksSuccess, (state, { books }) => ({ // Khi loadBooksSuccess được gọi, trả về state mới với mảng books mới
    ...state, // Giữ nguyên state cũ
    books // Gán mảng books bằng mảng books mới
  })),
  on(loadBooksFailure, (state, { error }) => ({ // Khi loadBooksFailure được gọi, trả về state mới với lỗi
    ...state, // Giữ nguyên state cũ
    error // Gán lỗi bằng lỗi mới
  }))
);
