import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from "../models/user.model";

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  create(user: Omit<UserModel, 'id'>): Observable<UserModel> {
    return this._httpClient.post<UserModel>('https://fakestoreapi.com/users', user);
  }

  getOne(id: number): Observable<UserModel> {
    return this._httpClient.get<UserModel>(`https://fakestoreapi.com/users/${id}`);
  }
}
