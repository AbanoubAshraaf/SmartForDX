export interface ILoginCredentials {
    userName: string;
    password: string;
}

export interface ILoginResponseSuccess {
    access_token: string;
    locale: string;
    timezone: string;
}

export interface IUserData {
    authorities: string[];
    iat: number;
    lastName: string;
    name: string;
    random: string;
    sub: string;
    userLoggedIn: boolean;
}
