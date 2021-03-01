import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { StudentComponent } from './student/student.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { TopstudentComponent } from './topstudent/topstudent.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: 'Admindashboard', component: AdmindashboardComponent},
{path: 'student', component: StudentComponent},
{path: 'teacher', component: TeacherComponent},
{path: 'question', component: QuestionComponent},
{path: 'studentdashboard', component: StudentdashboardComponent},
{path: 'teacherdashboard', component: TeacherdashboardComponent},
{path: 'exam', component: ExamComponent},
{path: 'topstudent', component: TopstudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
