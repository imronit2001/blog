import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title:String = 'Get Input Box Value';
  displayVal:String = '';
  getValue(val:String){
    console.warn(val);
    this.displayVal = val;
  }
}
