import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { MainStackNavigator } from './mainStackNavigator';
import configureStore from 'redux-mock-store';
import { IReduxState } from '../redux/interface';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

describe('<MainStackNavigator />', () => {
    const initialState = {
        authReducer: { userLoggedIn: true },
        orderReducer: {},
        uiReducer: {},
    } as IReduxState;

    const mockStore = configureStore();
    let store = mockStore(initialState);

    const ReduxStackNavigator = ({ reduxStore = store }) => (
        <Provider store={reduxStore}>
            <NavigationContainer>
                <MainStackNavigator />
            </NavigationContainer>
        </Provider>
    );

    it('should render stack navigator without craching', () => {
        const rendered = renderer.create(<ReduxStackNavigator />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('start with home screen if the user logged in  ', () => {
        const { getByTestId, queryByTestId } = render(<ReduxStackNavigator />);

        expect(getByTestId('home-screen')).toBeTruthy();
        expect(queryByTestId('login-screen')).toBeFalsy();
    });

    it('start with login screen if the user logged in  ', () => {
        const notLoggedInState = {
            ...initialState,
            authReducer: { userLoggedIn: false },
        };
        store = mockStore(notLoggedInState);

        const { getByTestId, queryByTestId } = render(<ReduxStackNavigator reduxStore={store} />);

        expect(getByTestId('login-screen')).toBeTruthy();
        expect(queryByTestId('home-screen')).toBeFalsy();
    });
});
