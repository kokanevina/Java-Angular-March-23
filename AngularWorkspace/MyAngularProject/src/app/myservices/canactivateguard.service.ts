import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
// Class Based Guards are deprecated
// Soln: Functional Based Guards
@Injectable({
  providedIn: 'root'
})
export class CanactivateguardService implements CanActivate {
  constructor(private loginService:LoginService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if(this.loginService.loggedIn) 
    return true;
   else {
    window.alert("You need to login first....");
    this.router.navigate(["/login"]);
    return false;
   }
    
  }
}
