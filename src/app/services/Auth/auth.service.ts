import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  // store the initial user values to be used in the project
  authSubject = new BehaviorSubject<any>({
    user: null,
  });

  // whenever a user logins, send user data to backend
  login(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, userData);
  }

  // whenever a user registers, send user data to backend
  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/signup`, userData);
  }

  // get user profile with token
  getUserProfile(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http
      .get<any>(`${this.baseUrl}/api/users/profile`, { headers })
      .pipe(
        tap((user) => {
          const currentState = this.authSubject.value;
          this.authSubject.next({...currentState, user})
        })
      );
  }

  //logout user
  logout(){
    localStorage.clear()
    this.authSubject.next({})
  }
}
