import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg="msg from app component";
  title = 'bilibili';

  run(){
    alert("run function from app component");
  }
}
