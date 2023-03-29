import { Component } from '@angular/core';
import { BookDetails } from '../classes/book-details';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  bookDetailsArray:BookDetails[];
  constructor(){
 this.bookDetailsArray=[
  new BookDetails(3,5454456,4,"Horror"),
  new BookDetails(1,6454456,3,"Horror"),
  new BookDetails(4,7454456,4,"Comic")
];
  }
}
