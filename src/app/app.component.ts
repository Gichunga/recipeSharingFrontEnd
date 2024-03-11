import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { MainpanelComponent } from '../pages/mainpanel/mainpanel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MainpanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'superRecipes';
}
