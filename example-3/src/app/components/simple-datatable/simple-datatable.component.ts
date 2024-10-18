import { Component } from '@angular/core';

import { EPerson } from '../../shared/interfaces/person';
import { ManyPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  manyPerson = ManyPerson;
}
