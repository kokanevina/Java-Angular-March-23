import { Component } from '@angular/core';
import { Book } from '../classes/book';
import { CRUDService } from '../myservices/crud.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  bookArray1=new Array<Book>();
  constructor(private crudService:CRUDService){
  
  }
  ngOnInit(){
    this.getBooks();
  }
  book=new Book();
  searchedBook=new Book();
  bookArray=new Array<Book>(new Book(2,"LeArn JavA",560.76,new Date('2 Feb 2000')),
  new Book(5,"JAVA Basics",660567.653897,new Date('20 Feb 2000')),
  new Book(4,"web Basics",566.12349,new Date('12 Jan 2001')),
  new Book(12,"Easy LearNing Python",460.2,new Date('20 March 2004')),
  new Book(1,"Web FundaMENtals",650.456,new Date('15 March 2004')));
  
  addBook(){
   let book1=new Book(this.book.id,this.book.bookName,this.book.bookPrice,this.book.publishedDate);
    this.bookArray.push(book1); // this book given to front end array
    // same book we will send to backend to store in json file
   this.crudService.addBook(book1).subscribe({
    next:(res)=>console.log(res), // book which added in backend file
    error:(res)=>console.log(res)
   });
   this.getBooks();
  }
  getBooks(){
    this.crudService.getAllBooks().subscribe({
      next:(res)=>{
        this.bookArray1=res as Book[];
        console.log(this.bookArray1);
         }, 
      error:(res)=>console.log(res)
    });
  }
  deleteBook(bid:number){
    this.crudService.deleteBookById(bid).subscribe({
      next:(res)=>console.log(res), 
      error:(res)=>console.log(res)
    });
    this.getBooks();
  }
  getBook(bk:Book){
    this.book=bk;
  }
  updateBook(){
    console.log(this.book);
    this.crudService.udpateBookById(this.book).subscribe({
      next:(res)=>{console.log(res); }, 
      error:(res)=>console.log(res)
    });
   this.getBooks();
  }
  searchBook(i:string){
    this.crudService.getBookById(parseInt(i)).subscribe({
      next:(res)=>{console.log(res); this.searchedBook=res as Book}, 
      error:(res)=>console.log(res)
    });
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
  }
}
