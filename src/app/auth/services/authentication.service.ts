import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConstants } from '../../app-constant';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(userData) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.userLogin}`;
    return this.http.post<any>(url, userData)
      .pipe(map(user => {
        if (user && user.auth_token) {
          localStorage.setItem('ACCESS_TOKEN', user.auth_token);
          localStorage.setItem('username', user.name);
        }
        return user;
      }));
  }
  isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  getAuthorizationToken() {
    const token = localStorage.getItem('ACCESS_TOKEN');
    return token;
  }
  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
