import { Component, inject } from '@angular/core';

import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';

import { CustomerService } from '../../../shared/services/customer.service';

import { FormGroup, FormControl, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';  // Because I have a form

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Customer } from '../../../shared/interfaces/customer';

import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-crud-update-example',
  standalone: true,
  imports: [CrudNavbarComponent,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    NgFor,
    NgIf
],
  templateUrl: './crud-update-example.component.html',
  styleUrl: './crud-update-example.component.css'
})
export class CrudUpdateExampleComponent {

  customerService = inject(CustomerService);

  searchForm = new FormGroup({
    search: new FormControl('')
  })

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    
    surName: new FormControl('', Validators.required),
    
    email: new FormControl('', [Validators.required, Validators.email]),

    afm: new FormControl('', Validators.required),
    
    phoneNumbers: new FormArray([
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
      })
    ]),

    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required)
    })
  })

  // a copy of the phoneNumbers of the form
  phoneNumbers = this.form.get('phoneNumbers') as FormArray;  // Type cast to FormArray

  removePhoneNumber(index:number) {
    this.phoneNumbers.removeAt(index)
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      new FormGroup({
        number: new FormControl("", Validators.required),
        type: new FormControl("", Validators.required)
      })
    )
  }

  onSubmit(value:any) {

  }

  search() {
    const searchValue = this.searchForm.value.search!; // This is the AFM entered in Search input

    this.customerService
        .getCustomerByAFM(searchValue)
        .subscribe((customer) =>  { // Customer is what getCustomerByAFM returns
          console.log(customer)

          // Fill values of the form with customer brought by the backend
          this.form.patchValue({
            givenName: customer.givenName,
            surName: customer.surName,
            email: customer.email,
            afm: customer.afm,
            address: customer.address
          })

          this.phoneNumbers.clear()
          
          customer.phoneNumbers.forEach((phoneNumber) => {
            this.phoneNumbers.push(
              new FormGroup({
                number: new FormControl(phoneNumber.number, Validators.required),
                type: new FormControl(phoneNumber.type, Validators.required)
              })
            )
          })
        })
  }
}
