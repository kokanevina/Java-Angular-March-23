import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent },
  {path:'authordetails/:bid', component:AuthorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
