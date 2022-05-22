import { IAuthenticationReducerState } from './authentication';
import { IUiReducerState } from './ui';

export interface IReduxState {
    authReducer: IAuthenticationReducerState;
    uiReducer: IUiReducerState;
}
