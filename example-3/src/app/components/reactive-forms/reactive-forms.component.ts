import { Component } from '@angular/core';

import { ReactiveFormStructureComponent } from './reactive-form-structure/reactive-form-structure.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormStructureComponent, PersonTableComponent, SimpleDatatableComponent],  // Those components will be used in html
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

}
