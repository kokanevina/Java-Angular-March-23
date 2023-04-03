import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { CanactivateguardService } from './myservices/canactivateguard.service';

const routes: Routes = [
  { path:'home',component:HomeComponent}
  ,
  { path:'showbooks', component:BookComponent,canActivate:[CanactivateguardService],  children:
  [
    {path:'bookdetails', component:BookDetailsComponent}
  ]},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent },
  { path:'authordetails/:bid', component:AuthorDetailsComponent },
  { path:'',component:HomeComponent},
  { path:'**',component:ViewNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
