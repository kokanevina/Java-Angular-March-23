import { Component } from '@angular/core';
import { Book } from '../classes/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  numArray=[45,23,8,68,34];
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
