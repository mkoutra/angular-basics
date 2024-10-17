import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// ---------------- Import my component
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',                           // Component's name.
  standalone: true,
  imports: [RouterOutlet, PersonTableComponent],  // Libraries to import
  templateUrl: './app.component.html',            // Which html page sent to someone called for this component
  styleUrl: './app.component.css'                 // Which style page sent to someone called for this component
})
export class AppComponent {
  title = 'example-1 title';

  person = {
    givenName: "James",
    surName: "Bond",
    age: 33,
    email:"test@email.com"
  }
}
