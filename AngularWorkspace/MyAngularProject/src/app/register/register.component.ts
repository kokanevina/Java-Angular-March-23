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
    mobilePattern='^[0-9]*$';
    passwordPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{5,12}$";
   //namePattern1=new RegExp('^[A-Za-z]*$');
   constructor(){
    this.registerForm=new FormGroup({
      firstName:new FormControl("",[Validators.required, Validators.pattern(this.namePattern)]),
      lastName:new FormControl("",[Validators.required, Validators.pattern(this.namePattern)]),
      emailId:new FormControl("",[Validators.required,Validators.email]),
      mobileNumber:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern(this.mobilePattern)]),
      username:new FormControl("",[Validators.required,Validators.minLength(2)]),
      password:new FormControl("",[Validators.required,Validators.pattern(this.passwordPattern)]),
      confirmPassword:new FormControl("",[Validators.required]),
      age:new FormControl("",[Validators.required,Validators.min(20),Validators.max(40)])
    });
   }
   
    get fname(){
    return this.registerForm.get('firstName');
   }
   get lname(){
    return this.registerForm.get('lastName');
   }
   get eid(){
    return this.registerForm.get('emailId');
   }
   get mobile(){
    return this.registerForm.get('mobileNumber');
   }
   get uname(){
    return this.registerForm.get('username');
   }
   get pass(){
    return this.registerForm.get('password');
   }
   get cpass(){
    return this.registerForm.get('confirmPassword');
   }
   get ag(){
    return this.registerForm.get('age');
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
    return { 'pattern':value}
  else
    null
}*/

/*emptyFieldCheck(){
  // extracting value of formcontrol
  if(!@, @c)
    return { 'email':value}
  else
    null
}*/

/*emptyFieldCheck(){
  // extracting value of formcontrol
  if(v.length<10)
    return { 'minlength':value}
  else
    null
}*/