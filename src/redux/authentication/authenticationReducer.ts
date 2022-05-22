import { authActionTypes, IAction, IAuthenticationReducerState } from './authentication.interface';

export class authenticationReducer {
    static INITIAL_STATE: IAuthenticationReducerState = {
        authorities: [],
        iat: 0,
        lastName: '',
        name: '',
        random: '',
        sub: '',
        userLoggedIn: false,
    };

    static reduce = (state = authenticationReducer.INITIAL_STATE, action: IAction) => {
        switch (action.type) {
            case authActionTypes.SET_USER_DATA:
                return { ...state, ...action.userData };
            default:
                return state;
        }
    };
}
