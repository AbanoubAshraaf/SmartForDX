export enum gender {
    'male' = 'male',
    'female' = 'female',
}

interface IAdress {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export interface IContent {
    firstName: string;
    lastName: string;
    address: IAdress;
    gender: gender;
    externalId: string;
    middleName: string;
    dateOfBirth: string;
}

export interface IPatientData {
    id: string;
    tenant: string;
    content: IContent;
    createdAt: string;
}
