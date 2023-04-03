import { Component } from '@angular/core';
import { UserCrudService } from '../myservices/user-crud.service';
import { User } from '../classes/user';
import { LoginService } from '../myservices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="";
  password="";
  age=0;
  userArray:User[]=[];
  constructor(private usercrud:UserCrudService, private loginService:LoginService){}
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
    this.username=logForm.value.username;
    this.password=logForm.value.password;
   
    this.usercrud.getAllUsers().subscribe({
      next:(res)=>{
        this.userArray=res as User[]; 
       /*  console.log(this.userArray);  */
       this.loginService.login(this.userArray,this.username,this.password);
      },
      error:(res)=>console.log(res)
    });

  }
  ngOnDestroy(){
    console.log("in login ngOnDestory method");
    
  }
  
}
