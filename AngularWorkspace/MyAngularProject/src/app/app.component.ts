import { Component } from '@angular/core';

@Component({
  selector: 'app-root' /* user define */,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  myproject=9;
  constructor(){
    this.title="VINA PATIL NEO PROJECT"
  }
}
