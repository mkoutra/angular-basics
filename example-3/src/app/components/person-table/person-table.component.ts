import { Component, Input } from '@angular/core';

import { EPerson, Person } from '../../shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  // declare a variable with name person of type Person
  @Input() person : Person | undefined
  @Input() eperson : EPerson | undefined  // Input can be EPerson as well
}
