import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
projectName="EMPLOYEE MANAGEMENT";
companyNameFromChild="";
  headStyleObject={
      backgroundColor:'grey',
      color :'yellow',
      textAlign:'center'
  }

  colorArray=['#68B39F','#916D1A' ,'#D55B2E','hotpink','red']
  i=0;
  ngOnInit(){
      setInterval(()=> this.changeColor(), 1000);
  }
  changeColor(){
    this.headStyleObject.color=this.colorArray[this.i];
    this.i++;
    if(this.i==this.colorArray.length)
      this.i=0;
  }
  getChildData(data:any){
    this.companyNameFromChild=data;  // data from child is assigned to parent variable
  }
}
