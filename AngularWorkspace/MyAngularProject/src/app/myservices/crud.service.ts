import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/classes/book';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  url='http://localhost:3000/mybooks';

  constructor(private httpService:HttpClient) { }

  addBook(book:Book){
      return this.httpService.post(this.url,book);
  }
}
