import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyword:string;
  public histtoryList:any[]=[];

  constructor(public storage:StorageService) {

   }
    
  ngOnInit() {
    //console.log("refresh page!");
    var searchlist= this.storage.get("searchlist");
    if(searchlist){
      this.histtoryList=searchlist;
    }
  }

  doSearch(){
    if(this.histtoryList.indexOf(this.keyword)==-1){
      this.histtoryList.push(this.keyword);
      this.storage.set('searchlist',this.histtoryList);
    }
    
    this.keyword='';

  }
  deleteHistory(index){
    this.histtoryList.splice(index,1);
    this.storage.set('searchlist',this.histtoryList);
  }

}
