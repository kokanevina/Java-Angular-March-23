import { Component } from '@angular/core';
import { Book } from '../classes/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book=new Book();
  bookArray=new Array<Book>(new Book(2,"LeArn JavA",560.76,new Date('2 Feb 2000')),
  new Book(5,"JAVA Basics",660567.653897,new Date('20 Feb 2000')),
  new Book(4,"web Basics",566.12349,new Date('12 Jan 2001')),
  new Book(12,"Easy LearNing Python",460.2,new Date('20 March 2004')),
  new Book(1,"Web FundaMENtals",650.456,new Date('15 March 2004')));
  
  addBook(){
   let book1=new Book(this.book.bookId,this.book.bookName,this.book.bookPrice,this.book.publishedDate);
    this.bookArray.push(book1);
    console.log("Array Contents are:");
    console.log(this.bookArray);
    // forEach function is part of js
    // no need to use for loop / for of loop
    this.bookArray.forEach(bk=>console.log(bk)) // on console
  }
  sortProperty="bookId";
  sortType=false;
  sortCase=false;
  makeOrder(property:string){
   // console.log("current Property:"+property);
    //console.log("previous Property:"+this.sortProperty);
  /*   if(property==this.sortProperty)
        this.sortType=!this.sortType;
    else  
        this.sortType=false;
 */
    property==this.sortProperty ? this.sortType=!this.sortType : this.sortType=false;

    this.sortProperty=property;
  }

  caseChange(){
    this.sortCase=Boolean(this.sortCase);
    console.log(this.sortCase);
    console.log(typeof this.sortCase);
  }
}
