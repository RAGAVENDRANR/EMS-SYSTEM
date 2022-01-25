import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DatasComponent } from './datas/datas.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ContactComponent } from './contact/contact.component';

import { DataserviceService } from './dataservice.service';
import { EmpComponent } from './emp/emp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DatasComponent,
    AttendenceComponent,
    ContactComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,MatCardModule,MatSelectModule,MatGridListModule,MatSidenavModule
    
  ],
  providers: [ DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
