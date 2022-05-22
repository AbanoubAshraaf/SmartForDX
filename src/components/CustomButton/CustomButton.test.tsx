import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import { CustomButton } from '.';
import { ICustomButtonProps } from './CustomButton.interface';

describe('<CustomButton />', () => {
    const onPress = jest.fn();
    const defaultProps: ICustomButtonProps = {
        onPress,
        title: 'submit',
        loading: true,
    };

    it('should render the component without craching', () => {
        const rendered = renderer.create(<CustomButton {...defaultProps} />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('print activity indiator if loading prop is true', () => {
        const { getByTestId, queryByText } = render(<CustomButton {...defaultProps} />);
        expect(getByTestId('activity-indicator')).toBeTruthy();
        expect(queryByText('submit')).toBeFalsy();
    });

    it('not print activity indiator if loading prop is false', () => {
        const { queryByTestId, getByText } = render(
            <CustomButton {...defaultProps} loading={false} />,
        );
        expect(queryByTestId('activity-indicator')).toBeFalsy();
        expect(getByText('submit')).toBeTruthy();
    });

    it('fire onPress prop', () => {
        const { getByTestId } = render(<CustomButton {...defaultProps} />);
        fireEvent.press(getByTestId('custom-button'));
        expect(onPress).toHaveBeenCalled();
    });
});
