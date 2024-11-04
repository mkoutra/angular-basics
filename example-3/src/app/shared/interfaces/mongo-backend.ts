export interface User {
    givenName: string,
    surName: string,
    email: string,
    password: string
}

// For POST request
export interface Credentials {
    email: string,
    password: string
}

// The response received from backend
export interface LoggedInUser {
    fullname: string,
    email: string
}