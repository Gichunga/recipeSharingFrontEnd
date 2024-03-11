import { Component } from '@angular/core';
import { RecipecardComponent } from '../recipecard/recipecard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
} from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';

@Component({
  selector: 'app-mainpanel',
  standalone: true,
  imports: [RecipecardComponent, MatButtonModule, MatIconModule],
  templateUrl: './mainpanel.component.html',
  styleUrl: './mainpanel.component.css'
})
export class MainpanelComponent {
  recipes = [1,1,1,1,1,1]

  constructor(public dialog: MatDialog){}
  handleOpenCreateRecipeForm(){
    this.dialog.open(CreateRecipeFormComponent)
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreateRecipeFormComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
