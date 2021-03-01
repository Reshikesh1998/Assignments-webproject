import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebserviceService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdmincontrollerService {

  constructor(private http: HttpClient) { }



public createuser(uname: string, upass: string,udesignation: string)
{

  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  var sen = '{"uname" : "'+uname +'","upass": "'+ upass +'","designation": "'+ udesignation +'"}';
  console.log(sen)
  var url="http://localhost:8080/adduser";
  return this.http.post(url,sen,{'headers': header, responseType:'text'});
    
}

public updateuser(uname: string, upass: string,udesignation: string, uid: string)
{
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  var sen = '{"uname" : "'+uname +'","upass": "'+ upass +'","designation": "'+ udesignation +'"}';
  var url="http://localhost:8080/updateuser/?id="+uid;
  
  return this.http.put(url,sen,{'headers': header, responseType:'text'});
}
public deleteuser(uid: string)
{
  console.log(uid);
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  
  var url="http://localhost:8080/deleteuser/?id="+uid;
  console.log(url);
  
  return this.http.delete(url,{'headers': header, responseType:'text'});

}
public getoneuser(uid: string)
{
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  
  var url="http://localhost:8080/getoneuser/?id="+uid;
  
  return this.http.get(url,{'headers': header, responseType:'text'});

}
public getalluser(profile:string)
{
  var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
  
  var url="http://localhost:8080/getalluser/?profile="+profile;
  
  return this.http.get(url,{'headers': header, responseType:'text'});

}
public setstatus()
{

}
}
