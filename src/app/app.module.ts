import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './login/display/display.component';
import { PpDisplayComponent } from './pp-display/pp-display.component';
import { PpRegComponent } from './pp-register/pp-reg.component';
import { PpShowComponent } from './pp-show/pp-show.component';
import { NavnewComponent } from './navnew/navnew.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// import { PpRegComponent } from './pp-register/pp-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    DisplayComponent,
    PpDisplayComponent,
    PpRegComponent,
    PpShowComponent,
    NavnewComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
