import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { IReduxState } from '../../redux/interface';
import { HomeScreen } from './HomeScreen';
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
    const actual = jest.requireActual('@react-navigation/native');

    return {
        ...actual,
        useNavigation: () => ({
            navigate: mockNavigate,
        }),
    };
});

describe('<HomeScreen />', () => {
    const initialState = {
        orderReducer: { fetched: true },
        uiReducer: {},
        authReducer: {
            name: 'test',
            lastName: 's4dx',
        },
    } as IReduxState;
    const mockStore = configureStore();
    let store = mockStore(initialState);

    const ReduxHomeScreen = () => (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );

    it('should render the screen without craching', () => {
        const rendered = renderer.create(<ReduxHomeScreen />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('print full name for the user', () => {
        const { getByText } = render(<ReduxHomeScreen />);
        expect(getByText('test s4dx')).toBeTruthy();
    });

    it('sample identifier input should change with entered text when write', () => {
        const newValue = '632018010925';
        const { getByTestId } = render(<ReduxHomeScreen />);
        const sampleInput = getByTestId('sample-identifier-input');
        fireEvent.changeText(sampleInput, newValue);
        expect(sampleInput.props.value).toMatch(newValue);
    });
    it('should navigate directly if order data fetched before', () => {
        const { getByText } = render(<ReduxHomeScreen />);
        fireEvent.press(getByText('Submit'));
        expect(mockNavigate).toHaveBeenCalledWith('Order');
    });
});
