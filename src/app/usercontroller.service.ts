import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsercontrollerService {

  constructor(private http: HttpClient) { }


addnewquestion(question:string, op1:string, op2:string, op3:string, op4:string, answer:string)
{

  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  var sen = '{"question" : "'+question +'","option_1": "'+ op1 +'","option_2": "'+ op2 +'","option_3": "'+ op3 +'","option_4": "'+ op4 +'","answer": "'+ answer +'"}';
  console.log(sen)
  var url="http://localhost:8080/addquestion";
  return this.http.post(url,sen,{'headers': header, responseType:'text'});
}
updatenewquestion(qnum:string,question:string, op1:string, op2:string, op3:string, op4:string, answer:string)
{

  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'});
  var sen = '{"question" : "'+question +'","option_1": "'+ op1 +'","option_2": "'+ op2 +'","option_3": "'+ op3 +'","option_4": "'+ op4 +'","answer": "'+ answer +'"}';
  console.log(sen)
  var url="http://localhost:8080/updatequestion/?qno="+qnum;
  return this.http.put(url,sen,{'headers': header, responseType:'text'});
}
deleteaquestion(did:string)
{

  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  var url="http://localhost:8080/del/?qno="+did;
  return this.http.delete(url,{'headers': header, responseType:'text'});
}
getaquestion(gid:string)
{

  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  
 
  var url="http://localhost:8080/getonequestion/?qno="+gid;
  console.log(this.http.get(url,{'headers': header, responseType:'text'})+"no value")
  return this.http.get(url,{'headers': header, responseType:'text'});
}
getquestions()
{

  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  var url="http://localhost:8080/getallquestions";
  return this.http.get(url,{'headers': header, responseType:'text'});
}
public getastudent(uid: string)
{
  console.log("insde stud")
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  
  var url="http://localhost:8080/getonestudent/?id="+uid;
  
  return this.http.get(url,{'headers': header, responseType:'text'});

}
public getallstudent()
{
  var profile='student'
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  
  var url="http://localhost:8080/getallstudent/?profile="+profile;
  
  return this.http.get(url,{'headers': header, responseType:'text'});

}


public getscorestudent(studentid : string)
{
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  
  var url="http://localhost:8080/score/?id="+studentid;

  return this.http.get(url,{'headers': header, responseType:'text'} );
}

public examdata( exno: string, studid: string)
{
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  
  var url="http://localhost:8080/exam/?id="+studid+"&examno="+exno;

  return this.http.get(url,{'headers': header, responseType:'text'} );
}


public forwardkey(answer: string)
{

  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  console.log("f"+answer)
  var url="http://localhost:8080/forward/?answer="+answer;
  console.log(url);

  return this.http.get(url,{'headers': header, responseType:'text'} );
}

public backwardkey(answer: string)
{
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  console.log("b"+answer)
  var url="http://localhost:8080/backward/?answer="+answer;
  console.log(url);

  return this.http.get(url,{'headers': header, responseType:'text'} );
}

public submitexam()
{
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})

  var url="http://localhost:8080/submit";
  console.log(url);

  return this.http.get(url,{'headers': header, responseType:'text'} );

}

public topstudent(name:string, email:string, id:string)
{
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})

  var url="http://localhost:8080/topfive";
  
  console.log(url);
var sen='{ "name": "'+name+ '", "id" :'+ id+ ', "email": "'+ email+'"}'
console.log(sen)
  return this.http.post(url,sen,{'headers': header, responseType:'text'} );

}
}
