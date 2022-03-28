import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/state/user/user.interface';
import { baseUrl } from '../Api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'users';
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<User[]>(baseUrl + this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    return;
  }
}
