import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../webservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mydata:any="";
  constructor(private service: WebserviceService) { }

  ngOnInit(): void {
  
  }

}
