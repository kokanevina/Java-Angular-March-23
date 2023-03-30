import { Component } from '@angular/core';
import { MathematicsService } from '../myservices/mathematics.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css'],
  providers:[MathematicsService, /*u can add more Service names here */] 
  // new object of MathematicsService will be given to CounterComponent
})
export class CounterComponentComponent {

  counterCompCounter=this.mService.counter;
  constructor(private mService:MathematicsService){
    setInterval(()=>this.counterCompCounter=this.mService.counter,1000);
  }
 
  getCounter(){
    this.counterCompCounter=this.mService.incrementCounter();
  }

}
