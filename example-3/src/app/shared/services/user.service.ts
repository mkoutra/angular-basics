import { Injectable, inject, signal, effect } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Credentials, LoggedInUser, User } from '../interfaces/mongo-backend';

const API_URL=`${environment.apiURL}/user`  // http://localhost:5000/user

@Injectable({
  providedIn: 'root'  // The whole app
})
export class UserService {
  http: HttpClient = inject(HttpClient)

  user = signal<LoggedInUser | null>(null)  // Signal Variable with initial value null
  
  constructor() {
    effect(()=> {
      if (this.user()) {
        // If there are changes in user variable
        console.log("User logged in: ", this.user()?.fullname);
      } else {
        // If there are no changes in user variable.
        console.log("No user logged in.")
      }
    })
  }

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
