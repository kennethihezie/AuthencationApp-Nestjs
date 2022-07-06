export interface User{
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    pass: string,
    status: Status
}


export enum Status{
    UNREGISTERED = "UNREGISTERED",
    REGISTERED = "REGISTERED",
    PENDING = "PENDING"
}