import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('h',{static: false}) h:any;
  constructor() { }


  ngOnInit() {
  }

  
  run(){
    console.log("this is run function from header component")
    this.h.nativeElement.innerHTML="hahaha";
  }

}
