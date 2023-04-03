import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {
  url='http://localhost:3000/users';
  constructor(private httpService:HttpClient) { }
  addUser(user:User){
    return this.httpService.post(this.url,user);
  }
  getAllUsers(){
    return this.httpService.get(this.url);
  }
}
