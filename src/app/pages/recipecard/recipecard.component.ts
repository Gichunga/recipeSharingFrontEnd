import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-recipecard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, EditRecipeComponent],
  templateUrl: './recipecard.component.html',
  styleUrl: './recipecard.component.css',
})
export class RecipecardComponent {
  constructor(public dialog: MatDialog, private recipeService:RecipeServiceService) {}
  @Input() recipe:any
  liked = false;

  handleEditRecipeDialog() {
    this.dialog.open(EditRecipeComponent, {
      data: {recipe: this.recipe},
    });
  }

  handleDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id).subscribe();
  }

  handleLikeRecipe(){
    this.recipeService.likeRecipe(this.recipe.id).subscribe({
      next:(data)=>console.log("liked recipe", data),
      error:(error)=>console.log("error ", error)
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(EditRecipeComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
