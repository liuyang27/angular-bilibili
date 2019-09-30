import { Component, OnInit,ViewChild } from '@angular/core';



@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  @ViewChild('aside',{static:false}) myaside:any;
  constructor() { }

  ngOnInit() {
  }

  showAside(){
    console.log(this.myaside);
    if(this.myaside.nativeElement.style.width=='500px'){
      this.myaside.nativeElement.style.width='300px';
    }else{
      this.myaside.nativeElement.style.width='500px';
    }
  }

}
