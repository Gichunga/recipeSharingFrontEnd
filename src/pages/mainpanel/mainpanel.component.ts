import { Component } from '@angular/core';
import { RecipecardComponent } from '../recipecard/recipecard.component';

@Component({
  selector: 'app-mainpanel',
  standalone: true,
  imports: [RecipecardComponent],
  templateUrl: './mainpanel.component.html',
  styleUrl: './mainpanel.component.css'
})
export class MainpanelComponent {

}
