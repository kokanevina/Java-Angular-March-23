import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent  // components, pipes, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule  // other modules, builtin, custom modules
  ],
  providers: [ 
      // custom services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
