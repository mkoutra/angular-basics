import { Injectable, inject, signal, effect } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Credentials, LoggedInUser, User } from '../interfaces/mongo-backend';

import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL=`${environment.apiURL}/user`  // http://localhost:5000/user

@Injectable({
  providedIn: 'root'  // The whole app
})
export class UserService {
  http: HttpClient = inject(HttpClient)

  user = signal<LoggedInUser | null>(null)  // Signal Variable with initial value null
  
  router = inject(Router);

  constructor() {
    const access_token = localStorage.getItem("access_token")
    if (access_token) {
      const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser

      this.user.set({
        fullname: decodedTokenSubject.fullname,
        email: decodedTokenSubject.email
      })
    }

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

  logoutUser() {
    this.user.set(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['login'])
  }
}
