import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';

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
  recipeItem: any = {
    title: '',
    description: '',
    image_url: '',
    isVegetarian: '',
  };

  onSubmit() {
    console.log('values', this.recipeItem);
  }
}
