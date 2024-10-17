// We inserted Input manually
import { Component, Input } from '@angular/core';

// Person interface that describes our variables
import { Person } from '../../shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  // person is of type Person or contains nothing
  @Input() person: Person | undefined;
}
