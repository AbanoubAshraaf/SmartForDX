import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { baseUrl } from '../constants';
import { ILoginCredentials, ILoginResponseSuccess, IUserData } from '../../models/user';
import { login } from '.';

describe('fetch login API', () => {
    // const mockLogin = login as jest.Mock;

    const url = `${baseUrl}/login`;

    const expectedAdminLoginResponse: ILoginResponseSuccess = {
        locale: 'en',
        timezone: 'CEST',
        access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0LnM0ZHgiLCJyYW5kb20iOiIxMjM0IiwibmFtZSI6InRlc3QiLCJsYXN0TmFtZSI6InM0ZHgiLCJpYXQiOjE1MTYyMzkwMiwiYXV0aG9yaXRpZXMiOlsiQVBQIiwiQURNSU4iXX0.LPh4puFJlMd9MiUtWb14H5dnsaWrBIBobc31svPdW-A',
    };

    const expectedAdminUserData: IUserData = {
        sub: 'test.s4dx',
        random: '1234',
        name: 'test',
        lastName: 's4dx',
        iat: 151623902,
        authorities: ['APP', 'ADMIN'],
        userLoggedIn: true,
    };

    const expectedNormalLoginResponse: ILoginResponseSuccess = {
        locale: 'en',
        timezone: 'CEST',
        access_token:
            '    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0LnM0ZHgiLCJyYW5kb20iOiIxMjM0IiwibmFtZSI6InRlc3QiLCJsYXN0TmFtZSI6InM0ZHgiLCJpYXQiOjE1MTYyMzkwMiwiYXV0aG9yaXRpZXMiOlsiQVBQIl19.fSVzPHOTtajlEmQcs6ne-N7QQWdqeS2vjf5xKKsW_no',
    };

    const expectedNormalUserData: IUserData = {
        sub: 'test.s4dx',
        random: '1234',
        name: 'test',
        lastName: 's4dx',
        iat: 151623902,
        authorities: ['APP'],
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

    const server = setupServer();

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    global.toast = { show: () => {} };

    it('logged in with admin user', async () => {
        server.use(
            rest.post(url, (_req: any, response: (arg0: any) => any, context) => {
                return response(context.json(expectedAdminLoginResponse));
            }),
        );

        let actualUserData = await login(exampleLoginCredentials);
        expect(actualUserData).toStrictEqual(expectedAdminUserData);
    });

    it('logged in with normal user', async () => {
        server.use(
            rest.post(url, (_req: any, response: (arg0: any) => any, context) => {
                return response(context.json(expectedNormalLoginResponse));
            }),
        );

        let actualUserData = await login(exampleLoginCredentials);
        expect(actualUserData).toStrictEqual(expectedNormalUserData);
    });

    it('failing the fetcing retuern false ', async () => {
        server.use(
            rest.post(url, (_request, response, context) => {
                return response(context.status(404));
            }),
        );

        let actualLoginRsponse = await login(exampleFailsLoginCredentials);
        expect(actualLoginRsponse).toStrictEqual(false);
    });
});
