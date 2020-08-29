import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private getAllUsersUrl =
    'https://backend-people-crud-app.herokuapp.com/users';
  private deleteUserUrl =
    'https://backend-people-crud-app.herokuapp.com/users/';
  private addUserUrl =
    'https://backend-people-crud-app.herokuapp.com/users/add';

  private getOneUsersUrl =
    'https://backend-people-crud-app.herokuapp.com/users/';
  private updateUserUrl =
    'https://backend-people-crud-app.herokuapp.com/users/update';

  private signupUserUrl =
    'https://backend-people-crud-app.herokuapp.com/users/register';

  private loginUserUrl =
    'https://backend-people-crud-app.herokuapp.com/users/login';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id);
  }

  addUser(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUsersUrl + id);
  }
  updateUser(user: User) {
    return this.http.put<any>(this.updateUserUrl, user);
  }

  signupUser(user: User) {
    return this.http.post<any>(this.signupUserUrl, user);
  }
  loginAdmin(user: User) {
    return this.http.post<any>(this.loginUserUrl, user);
  }

  isLoggedIn() {
    let token = localStorage.getItem('myToken');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
