import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn=false;
  constructor() { }
  login(array:User[],uname:string,pass:string){
    // finding user available in array or not
    // find method
    let foundUser=array.find(userObject=>userObject.username==uname && userObject.password==pass);
    if(foundUser!=undefined){
      window.alert("You are logged in Successfully");
      this.loggedIn=true;
      // further logic in session management
    }
    else{
      window.alert("Either username or password is incorrect");
      this.loggedIn=false;
    }
}

}
