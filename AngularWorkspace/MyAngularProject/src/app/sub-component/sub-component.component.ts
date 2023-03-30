import { Component } from '@angular/core';
import { MathematicsService } from '../myservices/mathematics.service';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent {
  num1=0;num2=0;num3=0;
  subResult=0;
  subCompCounter=this.mathS.counter;
  constructor(private mathS:MathematicsService){
      setInterval(()=>this.subCompCounter=this.mathS.counter,1000);
  }
  add(){
    this.subResult=this.mathS.mathsSubtract(this.num1,this.num2,this.num3);
  }
}
