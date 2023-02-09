import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { recipe } from '../../recipe model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipeItem!:recipe;
 @Output() recipeSelected=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selected(){
    this.recipeSelected.emit();
  }

}
