import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Following the angular material documentation
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive-form-structure',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    // Material from here and below
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
    ],
  templateUrl: './reactive-form-structure.component.html',
  styleUrl: './reactive-form-structure.component.css'
})
export class ReactiveFormStructureComponent {
    // The whole group is accessed to form variable
    userForm = new FormGroup({
        givenName: new FormControl('', Validators.required), // Initial value is empty and the value is mandatory
        surName: new FormControl('', Validators.required),
        age: new FormControl(18, [  // I'm not sure if it should be 18 or '18'
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.min(18),
            Validators.max(100)
        ]), // Initial value is 18, mandatory value, accept only numbers(regex), value between 18-100
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormControl('', Validators.required)
    })

    onSubmit(value: any) {
        console.log(value);
        this.userForm.reset();  // Reset form
    }
}