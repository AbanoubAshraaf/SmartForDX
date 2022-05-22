import jwtDecode from 'jwt-decode';
import { ILoginCredentials, ILoginResponseSuccess, IUserData } from '../../models/user';
import { baseUrl } from '../constants';

const getUserData = (accessToken: string) => {
    const userData: IUserData = jwtDecode(accessToken);
    return { ...userData, userLoggedIn: true };
};

async function login(loginCredntials: ILoginCredentials): Promise<IUserData | false> {
    const url = `${baseUrl}/login`;

    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginCredntials),
    });

    const { status } = result;

    if (status !== 200 && status !== 201) {
        toast.show(`Failed to login (${status})`);
        return false;
    }

    const response: ILoginResponseSuccess = await result.json();

    return getUserData(response.access_token);
}

export { login };
