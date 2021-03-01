import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from '../webservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mydata:string ="";


  constructor(private service: WebserviceService, private router: Router) { }
  value1 = true;

  ngOnInit(): void {
  }

  onClicklogin(udata: any){
    console.log("inside onclickregister");
    console.log(udata.uusername+udata.upassword+udata.udesignation);
   this.service.userlogincheck(udata.uusername,udata.upassword,udata.udesignation).subscribe((data) => 
    {
      this.mydata = data;
      if(this.mydata==="successful")
      {
        this.value1=false;
        if(udata.udesignation === "student")
        {
          this.router.navigate(['/studentdashboard']);
          console.log("inside if stu")
        }
        
     
       else if(udata.udesignation === "teacher")
        {
          this.router.navigate(['/teacherdashboard']);
          console.log("inside if tea")
        }
        
         
      }
      else
      {
       this.router.navigate(['/login']);
      }
    });
  }

  onClickSubmit(adata: any)
  {
    
   this.service.logincheck(adata.username,adata.password).subscribe((data: string) => 
   {
      this.mydata =  data;
     if(this.mydata==="successful")
     {
       this.router.navigate(['/Admindashboard']);
    
          console.log("inside if")
     }
     else
     {
      this.router.navigate(['/login']);
     }
      console.log("inside")
     
   })
  }

}
