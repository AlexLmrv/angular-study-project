import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'desacription', 'http://edaetoprosto.ru/kulinar/xblud115/image00.jpg', [
      new Ingredient('Meat', 5),
      new Ingredient('Wine', 3)
    ]),
    new Recipe('Another Test Recipe', 'desacription', 'http://edaetoprosto.ru/kulinar/xblud115/image00.jpg', [
      new Ingredient('Bread', 4),
      new Ingredient('Juice', 8)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
