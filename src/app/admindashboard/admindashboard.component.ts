import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmincontrollerService } from '../admincontroller.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router: Router, private admincontroller: AdmincontrollerService) { }

  ngOnInit(): void {
  }

  student(){
    console.log("inside student")
    this.router.navigate(['/student']);
  }
  teacher(){
    console.log("inside teacher")
    this.router.navigate(['/teacher']);
  }
  questions(){
    console.log("inside questions")
    this.router.navigate(['/question']);
  }
}
