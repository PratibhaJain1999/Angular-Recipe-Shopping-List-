import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredient.modal';
import { ShoppingListService } from './shoppingService';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:ingredients[]=[];
  ingredient={};
  editIndexItem:any;



  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingService.getIngredients();
  }
  dataAdd(event:any){
    this.ingredients.push(event);
  }
  ingredientSelected(index:number){
 this.ingredient=this.ingredients[index];
 this.editIndexItem=index;
  }
  ingredientChanges(event:any){
 this.ingredients[this.editIndexItem]=event;
  }
  ingredientDelete(event:any){
    this.ingredients.splice(this.editIndexItem,1);
  }
  
}

