import { Component } from '@angular/core';

import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Brianna",
      "surName": "Stewart",
      "email": "b.m1@rocketmail.com",
      "age": 70,
      "address": "Panora"
    },
    {
      "givenName": "Steven",
      "surName": "Rivera",
      "email": "stevenandrewrivera93@ymail.com",
      "age": 65,
      "address": "Tiverton"
    },
    {
      "givenName": "Adam",
      "surName": "Sanders",
      "email": "adam_sanders@hotmail.com",
      "age": 29,
      "address": "Olmitz"
    },
    {
      "givenName": "Daniel",
      "surName": "Flores",
      "email": "daniel.c.flores@hotmail.com",
      "age": 19,
      "address": "Amherst"
    },
    {
      "givenName": "Audrey",
      "surName": "Garcia",
      "email": "agarcia@live.com",
      "age": 45,
      "address": "Mechanicsburg"
    },
    {
      "givenName": "Andrew",
      "surName": "Baker",
      "email": "andrew.alexander.baker@live.com",
      "age": 62,
      "address": "Greenbush"
    },
    {
      "givenName": "Alyssa",
      "surName": "James",
      "email": "a.james@aol.com",
      "age": 52,
      "address": "Canyon Country"
    },
    {
      "givenName": "Jose",
      "surName": "Phillips",
      "email": "j_phillips@ymail.com",
      "age": 22,
      "address": "Sacramento"
    },
    {
      "givenName": "Amanda",
      "surName": "Clark",
      "email": "a.clark@yahoo.com",
      "age": 76,
      "address": "Denver"
    },
    {
      "givenName": "Michael",
      "surName": "Miller",
      "email": "michael_miller@live.com",
      "age": 77,
      "address": "Ravenwood"
    }
  ]
}
