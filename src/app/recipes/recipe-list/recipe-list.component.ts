import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output,Input, SimpleChanges } from '@angular/core';
import { recipe } from '../recipe model';
import { RecipeSevice } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:recipe[]=[
    
  ];
  @Output() recipeSelection=new EventEmitter();
  @Output() newRecipeBtn = new EventEmitter();
  @Input() recipeAdded:any;
  @Input() recipeDelete:any

  constructor(private recipeService:RecipeSevice) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
    this.recipeService.getValue().subscribe((value) => {
      this.recipes = value;
    })
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes['recipeAdded'] && changes['recipeAdded'].currentValue)
    {
        this.recipes.push(changes['recipeAdded'].currentValue)
        this.recipeService.updateRecipe(this.recipes)
    }
    if(changes['recipeDelete'] && changes['recipeDelete'].currentValue){
      let index=this.recipes.indexOf(changes['recipeDelete'].currentValue);
      this.recipes.splice(index,1);
      this.recipeService.updateRecipe(this.recipes)

    }
  }
  
onSelect(recipe:recipe){
  this.recipeSelection.emit(recipe);
}

newRecipeButtonClick()
{
  this.newRecipeBtn.emit(true);
}

}
// let index = this.recipes.indexOf(changes['recipeToBeDeleted'].currentValue);
//       this.recipes.splice(index,1);

