import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';

@Component({
  selector: 'app-recipecard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, EditRecipeComponent],
  templateUrl: './recipecard.component.html',
  styleUrl: './recipecard.component.css'
})
export class RecipecardComponent {
  constructor(public dialog: MatDialog){}

  handleEditRecipeDialog(){
    this.dialog.open(EditRecipeComponent)
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(EditRecipeComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}