import { BehaviorSubject, Observable } from "rxjs";
import { recipe } from "./recipe model";

export class RecipeSevice{

    private recipeList!:BehaviorSubject<recipe[]>
    recipes:recipe[]=[
        new recipe('Pizza Recipe1','Pizza Description4','https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?size=626&ext=jpg&ga=GA1.2.1565988389.1657947418'),
        new recipe('Pizza Recipe2','Pizza Description2','https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80'),
        new recipe('Pizza Recipe3','Pizza Description1','https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ='),
    
    ]

    constructor() {
        this.recipeList = new BehaviorSubject<recipe[]>(this.recipes);
    }
    getRecipes(){
        return this.recipes;
    }
    updateRecipe(recipes:any){
        this.recipes=recipes;
    }
    setValue(value:any) {
        this.recipeList.next(value);
    }

    getValue() : Observable<recipe[]> {
        return this.recipeList.asObservable();
    }

  
}