import { ILoginCredentials, ILoginResponseSuccess, IUserData } from '../../models/user';
import { authActionTypes, IAction } from './authentication.interface';
import { authenticationActions } from './authenticationActions';
import { userLoginSaga } from './authenticationSaga';
import { runSaga } from 'redux-saga';
import { uiActionTypes } from '../ui';
import { authenticationReducer } from './authenticationReducer';

const loginCredentials: ILoginCredentials = {
    userName: 'test',
    password: 'asdf1234',
};

const expectedAdminLoginResponse: ILoginResponseSuccess = {
    locale: 'en',
    timezone: 'CEST',
    access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0LnM0ZHgiLCJyYW5kb20iOiIxMjM0IiwibmFtZSI6InRlc3QiLCJsYXN0TmFtZSI6InM0ZHgiLCJpYXQiOjE1MTYyMzkwMiwiYXV0aG9yaXRpZXMiOlsiQVBQIiwiQURNSU4iXX0.LPh4puFJlMd9MiUtWb14H5dnsaWrBIBobc31svPdW-A',
};

const userData: IUserData = {
    sub: 'test.s4dx',
    random: '1234',
    name: 'test',
    lastName: 's4dx',
    iat: 151623902,
    authorities: ['APP', 'ADMIN'],
    userLoggedIn: true,
};

const exampleLoginCredentials: ILoginCredentials = {
    userName: 'john.doe.admin',
    password: 'asdf1234',
};

const exampleFailsLoginCredentials: ILoginCredentials = {
    userName: 'test',
    password: 'asdf1234',
};

global.fetch = jest.fn(() =>
    Promise.resolve({
        status: 201,
        json: () => Promise.resolve({ ...expectedAdminLoginResponse }),
    }),
);

beforeEach(() => {
    fetch.mockClear();
});

describe('redux authentication actions', () => {
    it('test userLogin action', () => {
        const actionReturnValue = authenticationActions.userLogin(loginCredentials);
        expect(actionReturnValue.type).toEqual(authActionTypes.USER_LOGIN);
        expect(actionReturnValue.loginCredntials).toEqual(loginCredentials);
    });

    it('test setUserData action', () => {
        const actionReturnValue = authenticationActions.setUserData(userData);
        expect(actionReturnValue.type).toEqual(authActionTypes.SET_USER_DATA);
        expect(actionReturnValue.userData).toEqual(userData);
    });
});

describe('redux authentication reducer', () => {
    it('should return initial state', () => {
        expect(authenticationReducer.reduce(undefined, {})).toEqual(
            authenticationReducer.INITIAL_STATE,
        );
    });

    it('should handle SET_USER_DATA', () => {
        const type = authActionTypes.SET_USER_DATA;

        const action = { type, userData } as IAction;

        const reducerReturnValue = authenticationReducer.reduce(
            authenticationReducer.INITIAL_STATE,
            action,
        );

        expect(reducerReturnValue).toStrictEqual(userData);
    });
});

describe('redux authentication sagas', () => {
    it('response ok in userLoginGen saga success', async () => {
        global.toast = { show: () => {} };
        const SagaAction: IAction = {
            type: authActionTypes.USER_LOGIN,
            loginCredntials: exampleLoginCredentials,
        };
        const dispatched: any[] = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            userLoginSaga,
            SagaAction,
        ).toPromise();

        expect(dispatched[0].type).toEqual(uiActionTypes.SET_LOADER);
        expect(dispatched[0].loading).toEqual(true);
        expect(dispatched[1].type).toEqual(authActionTypes.SET_USER_DATA);
        expect(dispatched[1].userData).toEqual(userData);
        expect(dispatched[2].type).toEqual(uiActionTypes.SET_LOADER);
        expect(dispatched[2].loading).toEqual(false);
    });

    it('response false userLoginGen saga faild', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 404,
            }),
        );
        global.toast = { show: () => {} };
        const SagaAction: IAction = {
            type: authActionTypes.USER_LOGIN,
            loginCredntials: exampleFailsLoginCredentials,
        };
        const dispatched: any[] = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            userLoginSaga,
            SagaAction,
        ).toPromise();

        expect(dispatched[0].type).toEqual(uiActionTypes.SET_LOADER);
        expect(dispatched[0].loading).toEqual(true);
        expect(dispatched[1].type).toEqual(uiActionTypes.SET_LOADER);
        expect(dispatched[1].loading).toEqual(false);
    });
});
