import { Component } from '@angular/core';

import { ReactiveFormStructureComponent } from './reactive-form-structure/reactive-form-structure.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormStructureComponent, PersonTableComponent, SimpleDatatableComponent],  // Those components will be used in html
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  currentPerson : EPerson | undefined;  // Needed

  onPerson(person : EPerson) {
    console.log("Parent: ", person);
    this.currentPerson = person;        // set currentPerson equal to person. Now currentPerson can be used in html.
    ManyPerson.push(person);            // Insert the person to table
  }

}
