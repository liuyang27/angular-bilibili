import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key){
    //return "this is from service";
    return JSON.parse(localStorage.getItem(key));
  }
  remove(key){
    localStorage.removeItem(key);
  }


  getCallbackData(cb){
    setTimeout(() => {

      var username="zhangsan call back";
      cb(username);

    }, 1000);
  }

  getPromiseData(){
    return new Promise((res,rej)=>{

      setTimeout(() => {
        var username="zhangsan promise";
        res(username);
      }, 2000);
    })
  }

  getRxjsData(){
    return new Observable((myobserve)=>{
      setTimeout(() => {
        var username="zhangsan observable(Rxjs)";
        myobserve.next(username);
        //myobserve.error("error!!");
      }, 3000);
    })
  }


  getRxjsIntervalData(){
    let count=0;
    return new Observable((myobserve)=>{
      
      setInterval(() => {
        count++;
        var username="zhangsan observable(Rxjs) interval "+count;
        myobserve.next(username);
      }, 1000);
    })
  }


  getRxjsIntervalNum(){
    let count=0;
    return new Observable<any>((myobserve)=>{
      setInterval(() => {
        count++;
        myobserve.next(count);
      }, 1000);
    })
  }



}
