import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem('access_token', res.token);
      })
    );
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}