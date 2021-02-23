import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'desacription', 'http://edaetoprosto.ru/kulinar/xblud115/image00.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
