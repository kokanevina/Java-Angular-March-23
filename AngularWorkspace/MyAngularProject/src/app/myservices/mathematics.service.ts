import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathematicsService {

  counter=0; // shared among AddComponent and SubComponent
  constructor() { }

  mathsAdd(...ar:number[]):number{
      return ar.reduce((sum,ele)=>sum+ele); // learn javascript
    }
  mathsSubtract(...ar:number[]):number{
      return ar.reduce((sum,ele)=>sum-ele); // learn javascript
    }

   incrementCounter(){
    this.counter++;
    return this.counter;
   }
}
