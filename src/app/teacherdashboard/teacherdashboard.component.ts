import { Component, OnInit } from '@angular/core';
import { UsercontrollerService } from '../usercontroller.service';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherdashboardComponent implements OnInit {
create='';
update='';
delete='';
getonequest='';
getallquest='';
getastud='';
getstuds='';
  constructor(private service : UsercontrollerService) { }

  ngOnInit(): void {
  }


  AddQuestion(newque:any)
  {
this.service.addnewquestion(newque.question,newque.q1, newque.q2,newque.q3,newque.q4,newque.ans).subscribe((data) => 
{

  if(data=="Added successfully"){
this.create = data;
  }
})

  }




  UpdateQuestion(upquest: any)
  {
    console.log(upquest.uq,upquest.uq1,upquest.uq2,upquest.uq3,upquest.uq4,upquest.uans,upquest.qn)
    this.service.updatenewquestion(upquest.qn,upquest.uq,upquest.uq1,upquest.uq2,upquest.uq3,upquest.uq4,upquest.uans).subscribe((data) =>
{
  if(data=="updated successfully")
  {
    this.update =data;
  }
})
  }

  DeleteQuestion(delquest:any)
  {
    console.log(delquest.idd)
  this.service.deleteaquestion(delquest.idd).subscribe((data) =>
  {
    if(data=="deleted successfully ")
  {
    this.delete =data;
  }
  })
  }




  GetoneQuestion(getone:any)
{
this.service.getaquestion(getone.gid).subscribe((data) =>
{ console.log(data)
  this.getonequest =data;
  if(data!=''){
  this.getonequest =data;
}
})
}




GetallQuestion(alldata:any)
{
  console.log("inside all")
  this.service.getquestions().subscribe((data) =>
  {
    this.getallquest = data;
    if(data!='')
    {
      this.getallquest = data;
    }
  })
}




GetoneStudent(onestudent:any)
{
  console.log(onestudent.sid)
  this.service.getastudent(onestudent.sid).subscribe((data) =>
  {
    if(data!='')
    {
      this.getastud = data;
    }
  })
}



GetallStudent(alldata:any)
{
  this.service.getallstudent().subscribe((data) =>
  {
    if(data!='')
    {
      this.getstuds = data;
    }
  })

}




}
