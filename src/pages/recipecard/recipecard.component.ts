import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-recipecard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './recipecard.component.html',
  styleUrl: './recipecard.component.css'
})
export class RecipecardComponent {

}
