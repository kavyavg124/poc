import { Injectable } from '@angular/core';
import { AppConstants } from '../../app-constant';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUserList: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }
  usersList() {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.userList}`;
    const userList = this.http.get(url);
    return userList;
  }
  getUser(userID) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.getUser}`;
    return this.http.get(url + userID);
  }
  addUser(user) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.addUser}`;
    return this.http.post(url, user);
  }
  deleteUser(userID) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.deleteUser}`;
    return this.http.delete(url + userID);
  }
  editUser(user) {
    const url = `${AppConstants.API_URL}${AppConstants.API_ENDPOINT.updateUser}`;
    return this.http.put(url + user.id, user);
  }
  activeUserData() {
    this.activeUserList.emit();
  }
}
