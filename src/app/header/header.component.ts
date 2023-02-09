import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Output() tabComponent=new EventEmitter();
  constructor(private dataservices:DataStorageService) { }

  ngOnInit(): void {

  }
 showTab(tab:any){
  this.tabComponent.emit(tab);
 }
 saveData(){
  this.dataservices.dataStorage();
  
 }

 fetchData() {
  this.dataservices.fetchRecipes();
 }
}
