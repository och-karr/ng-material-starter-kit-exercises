import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginModel } from '../models/user-login.model';

@Injectable()
export class UserLoginService {
  constructor(private _httpClient: HttpClient) {
  }

  create(userLogin: Omit<UserLoginModel, 'token'>): Observable<UserLoginModel> {
    return this._httpClient.post<UserLoginModel>('https://fakestoreapi.com/auth/login', userLogin );
  }
}
