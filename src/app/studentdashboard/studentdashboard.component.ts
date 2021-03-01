import { Component, OnInit } from '@angular/core';
import { UsercontrollerService } from '../usercontroller.service';
@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  studentscore=''
  constructor(private service: UsercontrollerService) { }

  ngOnInit(): void {
  }


  
  getscore(studid:any)
  {
    console.log(studid.id)
this.service.getscorestudent(studid.id).subscribe((data) => 
{
 
  if(data!='')
  {
    this.studentscore =data;
  }
})
  }
}
