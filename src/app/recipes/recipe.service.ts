import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'desacription', 'http://edaetoprosto.ru/kulinar/xblud115/image00.jpg'),
    new Recipe('Another Test Recipe', 'desacription', 'http://edaetoprosto.ru/kulinar/xblud115/image00.jpg')
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
