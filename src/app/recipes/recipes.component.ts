import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipe } from './recipe model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetail:any;
  newRecipe = false;
recipeAdded:any;
  recipeDelete :any
  

  constructor() { }

  ngOnInit(): void {
  }
  recipeEvent(recipe:any){
this.recipeDetail=recipe;
this.newRecipe = false;
  }

  newRecipeBtFn(data:any) {
    this.newRecipe = data;
    this.recipeDetail ='' ;
  

  }
  newRecipeAdded(data:recipe){
   this.recipeAdded=data;
   this.recipeDetail='';
   this.newRecipe=false;
  }
  recipeToBeDeleted(data:recipe){
this.recipeDelete=data;
this.newRecipe=false;

this.recipeDetail='';


  }
}
