import { Component, OnInit } from '@angular/core';
import { UsercontrollerService } from '../usercontroller.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private service: UsercontrollerService) { }
question ='';
option1='';
option2='';
option3='';
option4='';
ans='';
value = true;
status=false;
  ngOnInit(): void {
  }


  getexam(edata:any)
  {
this.service.examdata(edata.examno, edata.sid).subscribe(data => 
  {
    this.value=false;
    this.status = true;
    var t = data.split(',');
    this.question=t[1].split("=")[1];
    this.option1=t[2].split("=")[1];
    this.option2=t[3].split("=")[1];
    this.option3=t[4].split("=")[1];
    this.option4=t[5].split("=")[1];
    console.log(t)
  })
    
  }
  forwardaction()
  {
    console.log("in fwdd")
    this.service.forwardkey(this.ans).subscribe(data => 
      {
        var t = data.split(',');
    this.question=t[1].split("=")[1];
    this.option1=t[2].split("=")[1];
    this.option2=t[3].split("=")[1];
    this.option3=t[4].split("=")[1];
    this.option4=t[5].split("=")[1];
    console.log(t)
      })
  }
  backwardaction()
  {
    console.log("in bwwd")
   
 
    this.service.backwardkey(this.ans).subscribe(data => 
      {
        var t = data.split(',');
        this.question=t[1].split("=")[1];
        this.option1=t[2].split("=")[1];
        this.option2=t[3].split("=")[1];
        this.option3=t[4].split("=")[1];
        this.option4=t[5].split("=")[1];
        console.log(t)
      })
  }

  submitbutton()
  {
    this.service.submitexam().subscribe(data =>
      {
        if(data= 'submitted')
        {
          this.question = 'submitted';
        }
      })
  }
}
