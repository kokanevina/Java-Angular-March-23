import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="";
  password="";
  age=0;
  collectData(){
    console.log(this.username);
    console.log(this.password);
  }

  collectData2(un:any,ps:any,age:any){
    console.log(un);
    console.log(typeof un);
    
    console.log(ps);
    console.log(typeof ps);

    console.log(age);
    console.log(typeof age);
  }

  collectData3(logForm:any){
    console.log("hi"+this.username);
    console.log("hi"+this.password);
    console.log(logForm); // pass this logForm at backend to check validity of user
    console.log(logForm.value.age);
    console.log(logForm.value.username);
    console.log(logForm.value.password);
  }
  ngOnDestroy(){
    console.log("in login ngOnDestory method");
    
  }
}
