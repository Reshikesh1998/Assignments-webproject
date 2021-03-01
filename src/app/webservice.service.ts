import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http: HttpClient) { }

  logincheck(ename:string,epass:string)
  {
    var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
    var sen = '{"uname" : "'+ename +'","upass": "'+ epass +'"}';
    var url="http://localhost:8080/adminlogin";
    return this.http.post(url,sen,{'headers': header, responseType:'text'});
    
  }

  userlogincheck(ename:string, epass:string, edesignation:string)
  {
    var header:any = new HttpHeaders({'Content-type': 'application/json','Accept':'*/*'})
    var sen = '{"uname" : "'+ename +'","upass": "'+ epass +'","designation": "'+ edesignation +'"}';
    console.log(sen)
    var url="http://localhost:8080/userlogin";
    return this.http.post(url,sen,{'headers': header, responseType:'text'});
  }



}
