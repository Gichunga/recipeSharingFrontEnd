import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css',
})
export class EditRecipeComponent {
  constructor(
    private recipeService: RecipeServiceService,
    @Inject(MAT_DIALOG_DATA) public data: { recipe: any }
  ) {}

  ngOnInit() {
    this.recipeItem = this.data.recipe;
  }

  recipeItem: any = {
    title: '',
    description: '',
    image: '',
    vegetarian: '',
  };

  onSubmit() {
    console.log('values', this.recipeItem);
    this.recipeService.updateRecipe(this.recipeItem).subscribe({
      next:(data)=>console.log("updated recipe ", data),
      error:(error)=>console.log("error ", error)
    });
  }
}
