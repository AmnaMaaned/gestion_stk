import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
   password_confirmation!: String;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://localhost:8000/api/auth/register', user);
  }

  // Login
  login(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://localhost:8000/api/auth/user-profile');
  }
}