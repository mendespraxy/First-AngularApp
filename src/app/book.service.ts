import {Injectable} from '@angular/core';
import {BOOKS} from './mock-books';
import {Book} from './book';

@Injectable()
export class BookService{
    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    } 

    getBooksSlowly(): Promise<Book[]> {
        return new Promise(resolve => {
            // 2 second delay
            setTimeout(() => resolve(this.getBooks()), 2000);
        });     
    }
}