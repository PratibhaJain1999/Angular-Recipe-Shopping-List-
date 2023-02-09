import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ingredients } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // @ViewChild('nameInput')nameInputRef!:ElementRef;
  // @ViewChild('amountInput')amountInputRef!:ElementRef;
  @Output()ingredientAdded=new EventEmitter();
  @Output()ingredientChanges=new EventEmitter();
  @Output()deleteIngredient=new EventEmitter();
  @Input()ingredientsSelected:any;
 @ViewChild('form')ingredientForm!:NgForm;
 editItem=false


  constructor() { }

  ngOnInit(): void {


  }
  ngOnChanges(changes:SimpleChanges){
    if(changes['ingredientsSelected'] && changes['ingredientsSelected'].currentValue.name){
      this.editItem=true;
      this.ingredientForm.setValue({
        name:changes['ingredientsSelected'].currentValue.name,
        amt:changes['ingredientsSelected'].currentValue.amount
      })
    }

  }
  addIngredient(form:NgForm){
 const ingredient=new ingredients(form.value.name,form.value.amt)
 if( this.editItem){
  this.ingredientChanges.emit(ingredient)

 }
 else{
  this.ingredientAdded.emit(ingredient);

 }
 

 
  form.reset();



  }
  deleteText(){
    this.deleteIngredient.emit();
    this.onclear();
  }
  onclear(){
    this.ingredientForm.reset();
    this.editItem=false;
  }
}
