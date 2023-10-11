import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { CookieService } from 'ngx-cookie-service'; 

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8085/api/auth';

  constructor(
    private http: HttpClient,
    // private cookieService: CookieService,
  ) { }

  public isAuthenticated(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
  
  login(data: LoginData): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  register(data: RegisterData): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  logout(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {token});
  }

  profile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }
}
