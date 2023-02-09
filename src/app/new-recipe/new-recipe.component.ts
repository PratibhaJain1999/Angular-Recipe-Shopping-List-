import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { recipe } from '../recipes/recipe model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
 
  @Output()newRecipeAdded=new EventEmitter();
  newRecipeForm!:FormGroup



  newRecipe:any;

  constructor() { }

  ngOnInit(): void {
    this.newRecipeForm=new FormGroup({
      'name':new FormControl('',Validators.required),
      'image':new FormControl('',Validators.required),
      'description':new FormControl('',Validators.required),
    })
  }
  saveRecipe(){
 
 this.newRecipe=new recipe(this.newRecipeForm.value.name, this.newRecipeForm.value.image,this.newRecipeForm.value.description);
 this.newRecipeAdded.emit(this.newRecipe);
  }
  clearAll(){
    this.newRecipeForm.reset();
  }

}
