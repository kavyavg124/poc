import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
  isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  getAuthorizationToken() {
    const token = localStorage.getItem('ACCESS_TOKEN');
    return token;
  }
}
