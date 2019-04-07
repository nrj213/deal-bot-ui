import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from './constants';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  API_BASE_URL: string = AppConstants.API_BASE_URL;

  login() {
    return this.http.get<User>(this.API_BASE_URL + '/user/gdlogin');
  }
}
