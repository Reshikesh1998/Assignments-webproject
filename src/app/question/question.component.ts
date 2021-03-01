import { Component, OnInit } from '@angular/core';
import { UsercontrollerService } from '../usercontroller.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private service:UsercontrollerService) { }
  create='';
  update='';
  delete='';
  getastud='';
  getstuds='';
  question ='';
  option1='';
  option2='';
  option3='';
  option4='';
  ans='';
  getallquest:any='';
  getonequest:string ='';

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
  
  if(data!=''){
    var t = data.split(',');
    this.question=t[1].split("=")[1];
    this.option1=t[2].split("=")[1];
    this.option2=t[3].split("=")[1];
    this.option3=t[4].split("=")[1];
    this.option4=t[5].split("=")[1];
    this.ans=t[6].split("=")[1];
    console.log(t)

  
}
})
}




GetallQuestion(alldata:any)
{
  console.log("inside all")
  this.service.getquestions().subscribe((data) =>
  {
    
    if(data!='')
    {
      var t = data.split('Questionbank');
      console.log(t)
     
var mainlist = new Array();
t.forEach(function (value) {
  console.log("inside"+ value)
    var val = value.split(',');
    var question=val[1].split("=")[1];
    var option1=val[2].split("=")[1];
    var option2=val[3].split("=")[1];
    var option3=val[4].split("=")[1];
    var option4=val[5].split("=")[1];
    var ans=val[6].split("=")[1];
    console.log("Question : "+question+" option 1 : "+ option1+" option 2 : "+ option2+" option 3 : "+ option3+" option 4 : "+ option4+" Answer: "+ ans)
    mainlist.push("Question : "+question+" option 1 : "+ option1+" option 2 : "+ option2+" option 3 : "+ option3+" option 4 : "+ option4+" Answer: "+ ans)

});
console.log(mainlist.length+"asdasdasda")
this.getallquest=mainlist;
     
    }
  })
}

}
