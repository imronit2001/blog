import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'blog';
  data = "Hello Ronit"
  num = 7
  getName(){
    alert("FunctionCalled");
  }
  displayName(name:String){
    alert(name);
  }
  displayFullName(fname:String,lname:String){
    alert(fname+" "+lname);
  }
  getData(val:String){
    console.warn(val);
  }
}
