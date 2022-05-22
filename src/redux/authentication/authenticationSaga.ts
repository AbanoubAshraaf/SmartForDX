import { put } from 'redux-saga/effects';
import { login } from '../../api';
import { uiAction } from '../ui/uiActions';
import { IAction } from './authentication.interface';
import { authenticationActions } from './authenticationActions';
import { IUserData } from '../../models/user';

export function* userLoginSaga(action: IAction) {
    yield put(uiAction.setLoader(true));

    const resp: IUserData | false = yield login(action.loginCredntials);

    if (resp) {
        yield put(authenticationActions.setUserData({ ...resp }));
    }
    yield put(uiAction.setLoader(false));
}
