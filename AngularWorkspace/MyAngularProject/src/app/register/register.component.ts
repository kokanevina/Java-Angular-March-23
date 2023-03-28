import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { User } from '../classes/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   registerForm:FormGroup;
   user=new User();

    namePattern='^[A-Za-z]*$';
   //namePattern1=new RegExp('^[A-Za-z]*$');
   constructor(){
    this.registerForm=new FormGroup({
      firstName:new FormControl("",[Validators.required, Validators.pattern(this.namePattern)]),
      lastName:new FormControl("",[Validators.required, Validators.pattern(this.namePattern)]),
      emailId:new FormControl(""),
      mobileNumber:new FormControl(""),
      username:new FormControl(""),
      password:new FormControl(""),
      confirmPassword:new FormControl(""),
      age:new FormControl("")
    });
   }
   
    get fname(){
    return this.registerForm.get('firstName');
   }
   get lname(){
    return this.registerForm.get('lastName');
   }

   register(){
      console.log(this.registerForm);
      let fname=this.registerForm.value.firstName;
      console.log(fname);
     // this.user=this.registerForm;
   }
}


/*emptyFieldCheck(){
  // extracting value of formcontrol
  if(v=="")
    return { 'required':true}
  else
    null
}*/

/*emptyFieldCheck(){
  // extracting value of formcontrol
  if(!reg.test(v))
    return { 'pattern':true}
  else
    null
}*/