import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword:string;
  public todolist:any[]=[];

  constructor(public storage:StorageService) { }


  ngOnInit() {
    var todolistcheck=this.storage.get("todolist");
    if(todolistcheck){
      this.todolist=todolistcheck;
    }

    let obox:any=document.getElementById("box");
    console.log(obox.innerHTML);
    obox.style.color="red";



    //-------yi bu callback--------------
    let data=this.storage.getCallbackData((data)=>{
      console.log("yi bu rxjs: "+data);
    });
    
    //------ yi bu promise------

    var promiseData=this.storage.getPromiseData();
    promiseData.then((data)=>{
      console.log(data);
    } )

    //-------yi bu rxjs--------------
    var rxjsData=this.storage.getRxjsData();
    rxjsData.subscribe((d)=>{
      console.log(d);
    })

    //----------yi bu rxjs unsubscribe observable-----------
    var stream=this.storage.getRxjsData();
    var d = stream.subscribe((d)=>{
      console.log(d);
    })
    setTimeout(() => {
      d.unsubscribe();
    }, 1000);

    // -----------run multiple times observable-------
    var intervalData=this.storage.getRxjsIntervalData();
    intervalData.subscribe((d)=>{
      console.log(d);
    })

    //--------- pipe: filter map---------------
   var streamNum=this.storage.getRxjsIntervalNum();
   streamNum.pipe(
     filter((value:any)=>{
        if(value%2==0){
          return true;
        }
     }),
     map((v:any)=>{
       return v*v;
     })
   )
   .subscribe((data)=>{
     console.log(data);
   })

  }

  ngAfterViewInit(){
    let obox1:any=document.getElementById("box1");
    console.log(obox1.innerHTML);
    obox1.style.color="blue";
  }


  doAdd(e){
    if(e.keyCode==13){

      if(!this.todolisthaskeyword(this.todolist,this.keyword)){
        this.todolist.push({
          title:this.keyword,
          status:0
        });
        this.storage.set("todolist",this.todolist);
      }
      else{
        alert("keyword exists!")
      }
      this.keyword='';
    }
    
  }

  deleteData(k){
      this.todolist.splice(k,1);
      this.storage.set("todolist",this.todolist);
  }

  todolisthaskeyword(todolist,keyword){

    if(!keyword){
      return false;
    }

    for(var i=0;i<todolist.length;i++){
      if(todolist[i].title==keyword){
        return true;
      }
    }

    return false;
  }

  checkboxchange(){
    this.storage.set("todolist",this.todolist);
  }



}
