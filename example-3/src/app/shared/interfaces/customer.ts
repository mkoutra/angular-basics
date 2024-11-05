export interface PhoneNumber {
    number: string;
    type: string;
}

export interface Address {
    street: string;
    number: string;
    city: string;
    zipCode: string;
}

export interface Customer {
    givenName: string;
    surName: string;
    email: string;
    afm: string;
    phoneNumbers: PhoneNumber[];
    address: Address;
}
