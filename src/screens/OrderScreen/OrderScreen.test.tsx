import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { IReduxState } from '../../redux/interface';
import { IAuthenticationReducerState } from '../../redux/authentication';
import { OrderScreen } from './OrderScreen';

describe('<OrderScreen />', () => {
    let initialState = {
        authReducer: { authorities: ['APP', 'ADMIN'] },
        orderReducer: {},
        patientReducer: {},
    } as IReduxState;
    const mockStore = configureStore();
    let store = mockStore(initialState);

    let ReduxOrderScreen = () => (
        <Provider store={store}>
            <OrderScreen />
        </Provider>
    );

    it('should render the screen without craching', () => {
        const rendered = renderer.create(<ReduxOrderScreen />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it(' print patient data if user has admin authority', () => {
        const { queryByTestId } = render(<ReduxOrderScreen />);
        expect(queryByTestId('patient-view')).toBeTruthy();
    });

    it(' not print patient data if user has admin authority', () => {
        const initialNormalUserState: IReduxState = {
            ...initialState,
            authReducer: { authorities: ['APP'] } as IAuthenticationReducerState,
        };
        store = mockStore(initialNormalUserState);
        ReduxOrderScreen = () => (
            <Provider store={store}>
                <OrderScreen />
            </Provider>
        );
        const { queryByTestId } = render(<ReduxOrderScreen />);
        expect(queryByTestId('patient-view')).toBeFalsy();
    });
});
