import { Component } from '@angular/core';
import { MathematicsService } from '../myservices/mathematics.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {
num1=0;num2=0;num3=0;
sumResult=0;
addcompCounter=this.mathService.counter;
constructor(private mathService:MathematicsService){

} 

add(){
 // this.sumResult=this.num1+this.num2+this.num3;
 this.sumResult=this.mathService.mathsAdd(this.num1,this.num2,this.num3);
}

getCounter(){
 this.addcompCounter= this.mathService.incrementCounter();
}
}
