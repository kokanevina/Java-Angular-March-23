import { Component } from '@angular/core';
import { Book } from '../classes/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  systemType="distributed system";
  age=0;
  percentage=0;
  ngOnInit(){
    console.log("In Home Component init method");
    console.log(this.systemType);
    setTimeout(()=> {this.systemType="Dynamic Distribute System";
    console.log(this.systemType);
   }, 5000);
  }
  display(){
    console.log(this.systemType);
  }

  book=new Book();
  bookArray=new Array<Book>();
  addBook(){
   let book1=new Book(this.book.bookId,this.book.bookName,this.book.bookPrice,this.book.publishedDate);
    this.bookArray.push(book1);
    console.log("Array Contents are:");
    console.log(this.bookArray);
    // forEach function is part of js
    // no need to use for loop / for of loop
    this.bookArray.forEach(bk=>console.log(bk)) // on console
  }


}
