import { Component, EventEmitter, Output } from '@angular/core';

// Source: [Simple form example] https://material.angular.io/components/form-field/overview
import { FormsModule } from '@angular/forms';
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
export class TemplateFormComponent {
  // We emit this to the father
  @Output() person = new EventEmitter<EPerson>

  onSubmit(value: EPerson) {
    console.log("From Child", value)
    this.person.emit(value as EPerson); // Send value 
  }
}
