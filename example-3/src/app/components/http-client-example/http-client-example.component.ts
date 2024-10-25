import { Component, inject } from '@angular/core';

import { JokesService } from '../../shared/services/jokes.service';

// https://material.angular.io/components/card/overview
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {
  // constructor(jokesService: JokesService) {}
  // or
  jokesService = inject(JokesService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  // ngOnInit() {
  //   // Both are asynchronous

  //   this.jokesService.getDadJokes()
  //       .subscribe((data) => {
  //         console.log("Dad Joke: ", data.joke);
  //         this.dadJoke = data.joke;
  //       })
    
  //   this.jokesService.getChuckNorrisJokes()
  //       .subscribe((data) => {
  //         console.log(data.value);
  //         this.chuckNorrisJoke = data.value;
  //       })
  // }

  ngOnInit() {
    this. refreshDadJoke()
    this.refreshChuckNorrisJoke()
  }

  refreshDadJoke() {
    this.jokesService.getDadJokes()
        .subscribe((data) => {
          this.dadJoke = data.joke;
        })
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJokes()
        .subscribe((data) => {
          this.chuckNorrisJoke = data.value;
        })
  }

}
