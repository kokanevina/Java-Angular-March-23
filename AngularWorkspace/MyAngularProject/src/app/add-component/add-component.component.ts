import { Component, Input, OnChanges } from '@angular/core';
import { MathematicsService } from '../myservices/mathematics.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent  implements  OnChanges{
num1=0;num2=0;num3=0;
sumResult=0;
addcompCounter=this.mathService.counter;
@Input()
arrayFromParent:number[]=[];
len=0;
constructor(private mathService:MathematicsService){
this.len=this.arrayFromParent.length;
} 

add(){
 // this.sumResult=this.num1+this.num2+this.num3;
 this.sumResult=this.mathService.mathsAdd(this.num1,this.num2,this.num3);
}

getCounter(){
 this.addcompCounter= this.mathService.incrementCounter();
}
ngOnChanges(){
  console.log("in add component onchanges method");
}
ngDoCheck(){
  console.log("in add doCheck method");
  if(this.len<this.arrayFromParent.length)
    console.log("Array changes detected");
    
}
}
