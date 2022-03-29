import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/state/user/user.interface';
import { baseUrl } from '../Api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(pagination): Observable<Array<User>> {
    let usersUrl = 'users';
    return this.httpClient.get<User[]>(baseUrl + usersUrl + pagination.payload);
  }

  getUser(login: string): Observable<User> {
    let usersUrl = 'users/';
    return this.httpClient.get<User>(baseUrl + usersUrl + login);
  }
}
