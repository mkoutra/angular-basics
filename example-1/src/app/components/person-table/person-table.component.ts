import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person2 = {
    givenName: "Christodoulos",
    surName: "Fragkoudakis",
    age: 54,
    email: "chfrag@aueb.gr"
  }
}
