import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   registerForm:FormGroup;
    
   constructor(){
    this.registerForm=new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      emailId:new FormControl(),
      mobileNumber:new FormControl(),
      username:new FormControl(),
      password:new FormControl(),
      confirmPassword:new FormControl(),
    });
   }
}
