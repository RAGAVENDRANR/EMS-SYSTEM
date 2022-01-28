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

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { GoalsComponent } from './goals/goals.component';
import { AddGoalsComponent } from './add-goals/add-goals.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DatasComponent,
    AttendenceComponent,
    ContactComponent,
    EmpComponent,
    GoalsComponent,
    AddGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,MatCardModule,MatSelectModule,
    MatGridListModule,MatSidenavModule,
    MatToolbarModule,MatIconModule,MatTableModule,MatCheckboxModule,
    MatButtonModule

    
  ],
  providers: [ DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
