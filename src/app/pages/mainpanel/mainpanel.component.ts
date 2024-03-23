import { Component } from '@angular/core';
import { RecipecardComponent } from '../recipecard/recipecard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';
import { AuthService } from '../../services/Auth/auth.service';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-mainpanel',
  standalone: true,
  imports: [RecipecardComponent, MatButtonModule, MatIconModule],
  templateUrl: './mainpanel.component.html',
  styleUrl: './mainpanel.component.css',
})
export class MainpanelComponent {
  recipes = [];

  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
    private recipeService: RecipeServiceService
  ) {}

  ngOnInit(){
    this.authService.getUserProfile();
    this.recipeService.getRecipes().subscribe({});
    this.recipeService.recipeSubject.subscribe(
      (state)=>{
        this.recipes=state.recipes
      }
    )
  }

  handleOpenCreateRecipeForm() {
    this.dialog.open(CreateRecipeFormComponent);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CreateRecipeFormComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
