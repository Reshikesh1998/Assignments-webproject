import { Component, OnInit } from '@angular/core';
import { UsercontrollerService } from '../usercontroller.service';

@Component({
  selector: 'app-topstudent',
  templateUrl: './topstudent.component.html',
  styleUrls: ['./topstudent.component.css']
})
export class TopstudentComponent implements OnInit {
tops ='';
  constructor(private service: UsercontrollerService) { }

  ngOnInit(): void {
  }

  topstudent(details:any)
  {
this.service.topstudent(details.name, details.email, details.id).subscribe(data => 
  {
    this.tops = data;
  })
  }
}
