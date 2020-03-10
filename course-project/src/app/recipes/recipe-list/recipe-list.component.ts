import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  recipes: Recipe[] = [ new Recipe('Thit bo', 'this is thi bo', 'https://www.pressurecookrecipes.com/wp-content/uploads/2019/11/instant-pot-roast-beef.jpg'),
    new Recipe('Thit heo', 'this is thi heo', 'https://www.pressurecookrecipes.com/wp-content/uploads/2019/11/instant-pot-roast-beef.jpg')]
  constructor() { }

  ngOnInit(): void {
  }

}
