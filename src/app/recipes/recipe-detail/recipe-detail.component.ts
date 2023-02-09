import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { recipe } from '../recipe model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDet!:recipe;
  @Output()recipeDelete=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  deleteRecipe(){
  this.recipeDelete.emit(this.recipeDet); 
}

}
