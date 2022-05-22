import { ILoginCredentials, IUserData } from '../..//models/user';

export enum authActionTypes {
    USER_LOGIN = 'USER_LOGIN',
    SET_USER_DATA = 'SET_USER_DATA',
}

export interface IAuthenticationReducerState extends IUserData {}

export interface IAction {
    type: authActionTypes;
    loginCredntials: ILoginCredentials;
    userData?: IUserData;
}
