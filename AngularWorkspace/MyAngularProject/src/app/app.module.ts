import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OrderModule } from 'ngx-order-pipe';
import { LengthPipe } from './CustomPipes/length.pipe';
import { MypipePipe } from './mypipe.pipe' ;
import { TestService } from './test.service';
import { CharatPipe } from './CustomPipes/charat.pipe';
import { RegisterComponent } from './register/register.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { MathematicsService } from './myservices/mathematics.service';
import { AddComponentComponent } from './add-component/add-component.component';
import { SubComponentComponent } from './sub-component/sub-component.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    TestcomponentComponent,
    LoginComponent,
    LengthPipe,
    MypipePipe,
    CharatPipe,
    RegisterComponent,
    AuthorDetailsComponent,
    BookDetailsComponent,
    ViewNotFoundComponent,
    AddComponentComponent,
    SubComponentComponent  // components, pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, OrderModule,ReactiveFormsModule  // other modules, builtin, custom modules
  ],
  providers: [ 
    MathematicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
