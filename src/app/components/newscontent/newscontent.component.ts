import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.queryParams);

    //get chuanzhi
    // this.route.queryParams.subscribe((d)=>{
    //   console.log(d);
    // })

    //dongtai lu you
    this.route.params.subscribe((d)=>{
      console.log(d);
    })
  }

}
