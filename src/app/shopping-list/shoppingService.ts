import { ingredients } from "../shared/ingredient.modal";

export class ShoppingListService{
    ingredients:ingredients[]=[
        new ingredients('Apple',10),
        new ingredients('Orange',5)
      ]
      getIngredients(){
        return this.ingredients;
      }
}