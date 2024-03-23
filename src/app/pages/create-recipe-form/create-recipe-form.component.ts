import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-create-recipe-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl: './create-recipe-form.component.html',
  styleUrl: './create-recipe-form.component.css',
})
export class CreateRecipeFormComponent {
  constructor(private recipeService: RecipeServiceService) {}

  recipeItem: any = {
    title: '',
    description: '',
    image: '',
    vegetarian: '',
  };

  onSubmit() {
    // console.log('values', this.recipeItem);
    this.recipeService.createRecipe(this.recipeItem).subscribe({
      next: (data) => console.log('created ', data),
      error: (error) => console.log('error ', error),
    });
  }
}
