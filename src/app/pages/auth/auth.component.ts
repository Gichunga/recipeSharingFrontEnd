import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(public authService : AuthService){}

  isRegister = true;  // initially display the signup form

  registerForm = new FormGroup({
    fullName : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required]),
  })

  handleRegistration(){
    console.log("register ", this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt", response.jwt)
        this.authService.getUserProfile().subscribe();
        console.log("signup success", response);
      }
    })
  }

  handleLogin(){
    console.log("login ", this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem("jwt", response.jwt)
        this.authService.getUserProfile().subscribe();
        console.log("login success", response);
      }
    })
  }

  togglePanel(){
    this.isRegister=!this.isRegister;
  }
}
