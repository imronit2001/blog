import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title:String = 'Conditions (if-else)';
  title2:String = 'Multiple conditions';
  show = true;
  color = '';
  toggle(){
    this.show = !this.show;
  }
  changeColor(val:string){
    this.color = val;
  }
}
