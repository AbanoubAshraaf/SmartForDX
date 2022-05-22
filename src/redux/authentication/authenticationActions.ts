import { ILoginCredentials, IUserData } from '../../models/user';
import { authActionTypes } from './authentication.interface';

export class authenticationActions {
    static userLogin = (loginCredntials: ILoginCredentials) => {
        return {
            type: authActionTypes.USER_LOGIN,
            loginCredntials,
        };
    };

    static setUserData = (userData: IUserData) => {
        return {
            type: authActionTypes.SET_USER_DATA,
            userData,
        };
    };
}
