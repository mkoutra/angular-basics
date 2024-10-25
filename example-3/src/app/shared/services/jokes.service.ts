import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ChuckNorrisJoke, DadJoke } from '../interfaces/jokes';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';                // Returns html
const CHUCK_NORRIS_API_URL = 'https://api.chucknorris.io/jokes/random'  // Returns json

@Injectable({
  providedIn: 'root'  // This service is visible to the whole application
})
export class JokesService {
  // Old way
  // constructor(httpClient: HttpClient) { }

  // New way using inject
  // We declare a vatiable `http` of type HttpClient
  // which takes all methods included in HttpClient.
  http: HttpClient = inject(HttpClient)

  getDadJokes() {
    return this.http.get<DadJoke>(DAD_JOKES_API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
  }

  getChuckNorrisJokes() {
    return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
  }

}
