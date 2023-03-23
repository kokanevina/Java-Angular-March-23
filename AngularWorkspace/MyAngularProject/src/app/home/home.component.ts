import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  systemType="distributed system";

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
}
