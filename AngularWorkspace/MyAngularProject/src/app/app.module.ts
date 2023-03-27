import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OrderModule } from 'ngx-order-pipe';
import { LengthPipe } from './CustomPipes/length.pipe';
import { MypipePipe } from './mypipe.pipe' ;
import { TestService } from './test.service';
import { CharatPipe } from './CustomPipes/charat.pipe';
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
    CharatPipe  // components, pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, OrderModule// other modules, builtin, custom modules
  ],
  providers: [ 
      TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
