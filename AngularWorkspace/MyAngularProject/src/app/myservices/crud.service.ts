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
  getAllBooks(){
    return this.httpService.get(this.url);
  }
  deleteBookById(id:number){
    //return this.httpService.delete(`${this.url}/${id}`);
    return this.httpService.delete(this.url+"/"+id);
  }
  udpateBookById(bk:Book){
    console.log("inside method");
    console.log(bk);
    console.log("inside method");
     return this.httpService.put(this.url+"/"+bk.id,bk);
  }
  getBookById(id:number){
    return this.httpService.get(this.url+"/"+id);
  }
}
