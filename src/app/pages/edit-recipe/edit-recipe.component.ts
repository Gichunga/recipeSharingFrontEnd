import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

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
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {
  recipeItem: any = {
    title: 'Pizza',
    description: 'pizza is good',
    image_url: 'url here',
    isVegetarian: 'veg',
  };

  onSubmit() {
    console.log('values', this.recipeItem);
  }
}
