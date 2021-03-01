import { Component, OnInit } from '@angular/core';
import { AdmincontrollerService } from '../admincontroller.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  mydata="";
  create="";
  delete="";
  update="";
  one="";
  all="";
  constructor(private admincontroller: AdmincontrollerService) { }

  ngOnInit(): void {
  }

  public createuser(udata:any)
  {
      this.admincontroller.createuser(udata.username, udata.password,udata.designation).subscribe((data) => 
      {
        if (data=="Successfully added")
        {
              this.create=data;
        }
      })
  }
  
  public updateauser(updata:any)
  {
    console.log(updata.idu);
    this.admincontroller.updateuser(updata.username, updata.password,updata.designation, updata.idu ).subscribe((data) => 
    {
      if (data=="Successfully updated")
      {
            this.update=data;
      }
    })
  }
  public deleteuser(dedata:any)
  {console.log(dedata.idu);

    this.admincontroller.deleteuser(dedata.idu).subscribe((data) => 
    {
      if (data=="Deleted Successfully")
      {
            this.delete=data;
      }
    })
  
  }
  public getoneuser(gedata:any)
  {
   
    this.admincontroller.getoneuser( gedata.idu ).subscribe((data) => 
    {
      if (data!=" ")
      {
            this.one=data;
      }
    })
  
  }
  public getalluser(getallu:any)
  {
    this.admincontroller.getalluser(getallu.profile ).subscribe((data) => 
    {
      if (data!=" ")
      {
            this.all=data;
      }
    })
  }
  public setstatus()
  {
  
  }

}
