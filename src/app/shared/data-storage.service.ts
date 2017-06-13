import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class DataStorageService implements OnInit {
  constructor(private http: Http) {}

  ngOnInit(): void {
  }

// storeRecipes() {
  //   return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  // }
  //
  // getRecipes() {
  //   this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json')
  //     .map(
  //       (response: Response) => {
  //         const recipes: Recipe[] = response.json();
  //         for (let recipe of recipes) {
  //           if (!recipe['ingredients']) {
  //             recipe['ingredients'] = [];
  //           }
  //         }
  //         return recipes;
  //       }
  //     )
  //     .subscribe(
  //       (recipes: Recipe[]) => {
  //         this.recipeService.setRecipes(recipes);
  //       }
  //     );
  // }
}
