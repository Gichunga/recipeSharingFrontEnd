import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MainpanelComponent } from './pages/mainpanel/mainpanel.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthService } from './services/Auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MainpanelComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'superRecipes';
  user:any = null;

  constructor(public authService: AuthService){}

  ngOnInit(){
    console.log("ng on init")
    this.authService.getUserProfile().subscribe({
      next:data=>console.log("reg user", data),
      error:error=> console.log("error", error)
    })
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("user state ", auth)
        this.user=auth.user
      }
    )
  }
}
