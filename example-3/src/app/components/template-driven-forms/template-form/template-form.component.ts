import { Component, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';

// Source: [Simple form example] https://material.angular.io/components/form-field/overview
import { FormsModule, NgForm } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { EPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [MatSelectModule, 
            MatInputModule, 
            MatFormFieldModule, 
            MatButtonModule,
            FormsModule],  // All these will be used on template (html)
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements AfterViewInit {
  @Output() person = new EventEmitter<EPerson>  // This is emitted to the father

  @ViewChild('userForm', {static: false}) form: NgForm | undefined

  // This will run after template and component is loaded
  // This is because the form is a "template form", it's created in template
  ngAfterViewInit(): void {
      setTimeout(() => {
        if (this.form) {  // If the form has been loaded.
          this.form.setValue({
            givenName: "John",
            surName: "Doe",
            age: 30,
            email: "john@aueb.gr",
            address: "Road 1"
          })
        }
      }, 0)
  }

  onSubmit(value: any) {
    console.log("From Child", value)
    console.log(this.form)
    console.log(this.form?.value)
    this.person.emit(value as EPerson); // Send value 
  }

  onSetValue() {
    this.form?.setValue({
      givenName: "Lakis",
      surName: "Lalakis",
      age: 30,
      email: "john@aueb.gr",
      address: "Road 1"
    })
  }
}
