import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  User } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  registerUser(user: User):Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  loginUser(user: User):Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth`, user);
  }

  getUser():Observable<User> {
    return this.http.get<User>(`${this.baseUrl}`);
  }

  updateUser(user: User, id: string):Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  logOutUser():Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/logout`,null);
  }

}
