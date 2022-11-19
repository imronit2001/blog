import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title:String = 'Counter with Angular';
  count:number = 0;
  inc(){
    this.count++ ;
  }
  dec(){
    this.count--;
  }
}
