import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { fireEvent, render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { IReduxState } from '../../redux/interface';
import { LoginScreen } from './LoginScreen';
import { CustomButton } from '../../components/CustomButton';

describe('<LoginScreen />', () => {
    const initialState = {
        authReducer: {},
        uiReducer: {},
    } as IReduxState;
    const mockStore = configureStore();
    let store = mockStore(initialState);

    const ReduxLoginScreen = () => (
        <Provider store={store}>
            <LoginScreen />
        </Provider>
    );

    it('should render the screen without craching', () => {
        const rendered = renderer.create(<ReduxLoginScreen />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('username input should change with entered text when write', () => {
        const newValue = 'S4dx';
        const { getByTestId } = render(<ReduxLoginScreen />);
        const userNameInput = getByTestId('username-input');
        fireEvent.changeText(userNameInput, newValue);
        expect(userNameInput.props.value).toMatch(newValue);
    });

    it('passowrd input should change with entered text when write', () => {
        const newValue = 'S4dx';
        const { getByTestId } = render(<ReduxLoginScreen />);
        const passwordInput = getByTestId('password-input');
        fireEvent.changeText(passwordInput, newValue);
        expect(passwordInput.props.value).toMatch(newValue);
    });

    it('login function must call by user name and passowrd', () => {
        const newuserName = 'test';
        const newPassword = 'xxxx';
        const onLoginPress = jest.fn();
        const { getByTestId } = render(<ReduxLoginScreen />);

        const userNameInput = getByTestId('username-input');
        fireEvent.changeText(userNameInput, newuserName);

        const passwordInput = getByTestId('password-input');
        fireEvent.changeText(passwordInput, newPassword);

        const { getByTestId: getBybButtonTestId } = render(
            <CustomButton
                onPress={() =>
                    onLoginPress({
                        userName: userNameInput.props.value,
                        password: passwordInput.props.value,
                    })
                }
            />,
        );

        fireEvent.press(getBybButtonTestId('custom-button'));
        expect(onLoginPress).toBeCalledWith({
            userName: userNameInput.props.value,
            password: passwordInput.props.value,
        });
    });
});
