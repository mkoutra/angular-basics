import { Component, EventEmitter, Output } from '@angular/core';

import { EPerson } from '../../shared/interfaces/person';
import { ManyPerson } from '../../shared/interfaces/person';

import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  // When someone clicks create a new event
  @Output() personClicked = new EventEmitter<EPerson>();
  manyPerson = ManyPerson;

  sortOrder: EPerson = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    address: 'none'
  }

  // A function that returns nothing (void)
  // keyof is needed because sortKey must be guaranteed that is one of givenName, surName, age, email, address
  sortData(sortKey: keyof EPerson): void {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc'
      this.manyPerson = sortBy(this.manyPerson, sortKey).reverse()  // Default is ascending
    } else {
      this.sortOrder[sortKey] = 'asc'
      this.manyPerson = sortBy(this.manyPerson, sortKey);
    }
  }

  sortSign(sortKey: keyof EPerson):string {
    if (this.sortOrder[sortKey] === 'asc') {
      return '&uarr;';
    } else if (this.sortOrder[sortKey] === 'desc') {
      return '&darr;';
    } else {
      return '';
    }
  }

  onPersonClick(person: EPerson) {
    console.log(person);
    // send the person to someone that presses on you
    this.personClicked.emit(person);
  }

}
