import { IAuthenticationReducerState } from './authentication';
import { IOrderReducerState } from './order';
import { IUiReducerState } from './ui';

export interface IReduxState {
    authReducer: IAuthenticationReducerState;
    uiReducer: IUiReducerState;
    orderReducer: IOrderReducerState;
}
