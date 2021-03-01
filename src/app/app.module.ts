import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
 import {RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { QuestionComponent } from './question/question.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { ExamComponent } from './exam/exam.component';
import { TopstudentComponent } from './topstudent/topstudent.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdmindashboardComponent,
    StudentComponent,
    TeacherComponent,
    QuestionComponent,
    StudentdashboardComponent,
    TeacherdashboardComponent,
    ExamComponent,
    TopstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
