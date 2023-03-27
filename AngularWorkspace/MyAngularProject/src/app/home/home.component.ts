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
  imageObject={
    imageSource:'https://picsum.photos/id/1/200/300',
    imageHeight: 300,
    imageWidth : 400
  }

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
  nodeType="password";
  changeType(){
    this.nodeType='text';
  }
  
  changeType1(ev:any){
    if(ev.target.checked)
      this.nodeType="text";
    else  
      this.nodeType="password";
  }
}
