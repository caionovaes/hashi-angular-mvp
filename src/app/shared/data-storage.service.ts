import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';


@Injectable()
export class DataStorageService implements OnInit {

  constructor(private http: Http, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  archiveShow() {

  }

  // archiveShow() {
  //   return this.http.put('https://hashi-e420c.firebaseio.com/shows.json', this.recipeService.getRecipes());
  // }
  //
  // getRecipes() {
  //   this.http.get('https://hashi-e420c.firebaseio.com/')
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
