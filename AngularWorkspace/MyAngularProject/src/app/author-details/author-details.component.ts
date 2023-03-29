import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../classes/author';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {


 authorMap=new Map<number, Author>();
 bookId: number;
 author:Author | undefined=new Author();
 constructor(private routeService:ActivatedRoute)  {
  this.authorMap.set(1,new Author("v11",'Vina Patil',60,34));
    this.authorMap.set(4,new Author("p11",'Pravin Patil',45,10));
    this.authorMap.set(12,new Author("k34",'Kalpesh Jadhav',25,5));
    this.authorMap.set(2,new Author("s22",'Sanju Sane',55,10));
    this.authorMap.set(5,new Author("p11",'Pravin Patil',45,10));
    
    let routeP=routeService.snapshot.paramMap.get('bid');
   // console.log(routeP);
    if(routeP!=null)
        this.bookId=parseInt(routeP);
    else
      this.bookId=-1;
    console.log("Book Id:"+this.bookId);
    console.log(typeof this.bookId);
    
      this.findAuthor();
 }
  findAuthor(){
    this.author=this.authorMap.get(this.bookId);
  }
}
