import { Component, OnInit, ViewEncapsulation, OnDestroy, Injector, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'webproject';
  getdata:any="";
  postdata:any="";
  constructor(  @Inject(DOCUMENT) private document: Document ) {}
  ngOnInit():void
  {
    //this.document.body.classList.add('bodybg-color');
    // OR you can Add inline style css with the help of code below
   // this.document.body.style.background = '#000000';
  }
  ngOnDestroy():void
  {
   // this.document.body.classList.add('bodybg-color');
  }
 


}
