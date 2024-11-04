import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Credentials, User } from '../interfaces/mongo-backend';

const API_URL=`${environment.apiURL}/user`  // http://localhost:5000/user

@Injectable({
  providedIn: 'root'  // The whole app
})
export class UserService {
  http: HttpClient = inject(HttpClient)

  registerUser(user: User) {
    return this.http.post<{msg: string}>(`${API_URL}/register`, user) // send user to /register end-point
  }

  check_duplicate_email(email: string) {
    return this.http.get<{msg:string}>(`${API_URL}/check_duplicate_email/${email}`)
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{access_token: string}>(`${API_URL}/login`, credentials)
  }
}
