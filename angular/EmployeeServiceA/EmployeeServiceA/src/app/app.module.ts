import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{RouterModule, Routes, Route} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';

const myProjectRoute:Routes=[
  {path:'Register',component:RegisterComponent},
  {path:'Login', component:LoginComponent},
  {path:'Home',component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(myProjectRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
