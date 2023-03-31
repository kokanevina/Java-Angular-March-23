import { Component, EventEmitter, Input, OnChanges, Output,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges{
 
  @Input()
  projectNamefromParent="";

  links="Navigation Bar";
  companyName="Neo"; // 1. value to be shared to parent

  @Output()
  emitter=new EventEmitter<string>(); // 2. data from child to parent is passed via emit event

  classArray=['colorClass', 'decorationClass', 'fontClass'];
  classObject={
    'colorClass':true,
    'decorationClass':true,
    'fontClass':false
  }
  ngOnInit(){
    console.log("in navbar ngOnInit method");
    
    setInterval(()=>this.addremove(),3000);
    // data sharing from child to parent
    this.emitter.emit(this.companyName); // 3. via emit we are passing data to parent
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

  ngOnChanges(changes:SimpleChanges){
    console.log("in navbar ngOnChanges method");
    console.log(changes);
  }
 
}
