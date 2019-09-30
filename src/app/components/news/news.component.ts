import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild('mybox',{static: false}) mybox1:any;
  @ViewChild('header',{static: false}) header:any;

  @Input() title:any;
  @Input() run:any;
  @Input() home:any;

  public serverReply:string;
  public emplist:any[]=[];

  public newslist:any[]=[];

  constructor( public http:HttpClient) { }
 

  ngOnInit() {
    for(var i=0;i<10;i++){
      this.newslist.push("this is news "+i);
    }
  }

  ngAfterViewInit(): void {
    console.log(this.mybox1.nativeElement);
    console.log(this.mybox1);

    this.mybox1.nativeElement.style.color="green";
    this.mybox1.nativeElement.style.width="100px";
    this.mybox1.nativeElement.style.height="100px";
    this.mybox1.nativeElement.style.background="yellow";
    console.log(this.mybox1.nativeElement.innerHTML);

    //------------------------------------------------------

    
  }


  getparentMsg(){
    alert(this.title);
  }

  getChildRun(){
    this.header.run();

  }

  getparentRun(){
    //this.run(); or
    this.home.run();
  }

  getData(){
    let _url:string="/assets/data/employees.json";
    this.http.get(_url).subscribe((res:any)=>{
      console.log(res);
      this.emplist=[...res];
   
    })
  }

  postData(){ 
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json','test':'hahaaha','test2':'hahaaha2'})};
    this.http.post('http://localhost:3000/enroll',{"name":"lalala"},httpOptions).subscribe((res:any)=>{
      this.serverReply=res;
    })
  }

  
}
