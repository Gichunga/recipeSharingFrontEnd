import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user:any = null;

  constructor(public authService: AuthService, private router:Router){}

  ngOnInit(){
    this.authService.authSubject.subscribe(
      (auth)=>{
        console.log("user state ", auth)
        this.user=auth.user
      }
    )
  }

  handleLogOut(){
    this.authService.logout()
  }
}
