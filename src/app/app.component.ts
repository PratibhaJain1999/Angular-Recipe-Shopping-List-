import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  tabSelected='';
  navigateTab(event:any){
 console.log(event);
 this.tabSelected=event;
  }
}
