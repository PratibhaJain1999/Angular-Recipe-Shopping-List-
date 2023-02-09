import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recipe } from '../recipes/recipe model';
import { RecipeSevice } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient,private recipeService:RecipeSevice) {

   }
   dataStorage(){
    const recipes=this.recipeService.getRecipes();
    this.http.put('https://pratibha-e05a5-default-rtdb.firebaseio.com/recipe.json',recipes).subscribe(responsiveData=>{

    })
   }

   fetchRecipes() {
    this.http.get('https://pratibha-e05a5-default-rtdb.firebaseio.com/recipe.json').subscribe(responsiveData=>{
    this.recipeService.setValue(responsiveData);
    })
   }
}
/*https://pratibha-e05a5-default-rtdb.firebaseio.com/recipe
https://pratibha-e05a5-default-rtdb.firebaseio.com/
'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA8cGeHSAynDWKO171lsRBadJiERj8GVsw

 */