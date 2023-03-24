import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  links="Navigation Bar"

  classArray=['colorClass', 'decorationClass', 'fontClass'];
  classObject={
    'colorClass':true,
    'decorationClass':true,
    'fontClass':false
  }
  ngOnInit(){
    setInterval(()=>this.addremove(),3000);
  }
  i=0
   popped:string|undefined="";
   addremove(){
    if(this.i%2==0){
      this.popped=this.classArray.pop();
      this.i++;
    }
    else{
      if(this.popped!=undefined)
        this.classArray.push(this.popped);
      this.i++;
    }
  }
}
